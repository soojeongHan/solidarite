import React from "react";
import { useInfiniteQuery } from "react-query";

import ListTemplate from "../components/list/ListTemplate";
import ListSearchBar from "../components/list/ListSearchBar";
import ListNavigation from "../components/list/ListNavigation";
import ListContents from "../components/list/ListContents";
import ListFetchMoreBar from "../components/list/ListFetchMoreBar";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useHistoryState from "../hooks/useHistoryState";
import useDebounce from "../hooks/useDebounce";

const useFetchCategory = () => {
  return [{ type: "a" }, { type: "b" }];
};

const useFetchList = (currentCategory, searchWord) => {
  const limitPage = 10;
  const token = 865320;
  return useInfiniteQuery(
    /* NOTE QUERY KEYS : query keys를 기반으로 캐시할 지 정한다. 
       category, search가 변화할 때, 캐시에 있는 값을 기반으로 다시 서버에서 데이터를 요청할 지 정한다.
       예를 들어, 사용자가 키보드 입력를 통해 검색어를 변경했다고 해보자.
       keys = [{ name: "fetchListData", category: 'a', search: 'r' }] 와 같이 변경될 것이다.
       서버로부터 category가 a이며, search가 r인 데이터를 가진 쿼리를 보낼 것이고,
       서버는 해당 데이터를 보낼 것이다.
       다시 keys = [{ name: "fetchListData", category: 'a', search: '' }]로 변경하고,
       keys = [{ name: "fetchListData", category: 'a', search: 'r' }]로 변경해보자.
       서버에 요청을 보내지 않고, 기존에 있던 데이터로 응답한다. 
    */
    [{ name: "fetchListData", category: currentCategory, search: searchWord }],
    /* NOTE QUERY FUNCTION - INFINITE : infinite scroll은 UI Pattern 중에서 매우 흔한 패턴이기 때문에 구현되어있다.
        요청 : fetch('/api/projects?cursor=0')
        응답 : { data: [...], nextCursor: 3}
        위와 같은 방식으로 응답이 와야 다음 페이지가 어디로 갈지 정할 수 있다.
        라이브러리에 있던 pageParam을 이용하여 다음 페이지를 정해준다.
        반환 타입은 객체로, { data: fetchData, pageParam: pageParam + 1 } 와 같은 방식으로 반환한다.
    */
    /* NOTE 10 Page까지 모두 검색 후 2번 이상 내리면 지금까지의 모든 데이터와 함께 다시 처음부터 렌더링되는 오류 발생
      - A hasNextPage boolean is now available and is true if getNextPageParam returns a value other than undefined  
      - 간단하게 다음 페이지로 넘어가는 것을 금지할려면 undefined를 반환해야하는데, false를 반환했기 때문이다.

      query option - `getNextPageParam: (lastGroup) => {
        return lastGroup.pageParam ?? false;
      },`
      에서 다음과 같이 변경한다.
      query option - `getNextPageParam: ({pageParam}) => pageParam`
    */
    async ({ pageParam = 0 }) => {
      const searchUrl = searchWord === "" ? "" : `&search=${searchWord}`;
      const data = await fetch(
        `https://recruit-api.yonple.com/recruit/${token}/${currentCategory}-posts?page=${pageParam}${searchUrl}`
      );
      const json = await data.json();
      return Object.assign(
        {
          data: json,
        },
        limitPage > pageParam ? { pageParam: pageParam + 1 } : {}
      );
    },
    /* QUERY OPTIONS 
      - staleTime : 쿼리 데이터가 fresh 에서 stale로 전환되는데 걸리는 시간. 기본값은 0이다.
        Infinity로 설정하면 쿼리 데이터는 직접 캐시를 무효화할 때까지 fresh 상태로 유지된다.
      - getNextPageParam: 다음 페이지로 넘어갈 매개변수.
    */
    {
      getNextPageParam: ({ pageParam }) => pageParam,
      staleTime: Infinity,
    }
  );
};

const ListContainer = () => {
  const [searchWord, setSearchWord] = useHistoryState("", "searchWord");
  const onChangeSearchWord = useDebounce((e) => {
    setSearchWord(e.target.value);
  }, 150);
  // History 기반으로 뒤로 가기 시 상태를 유지시킨다.
  const [currentCategory, setCurrentCategory] = useHistoryState(
    "a",
    "currentCategory"
  );
  /* NOTE useInfiniteQuery return value
     - data: object containing infinite query data
     - fetchNextPage: Funtion
     - isFetchingNextPage: booleans are now available to distinguish between a background refresh state and a loading more state
     - hasNextPage: now available and is true if getNextPageParam returns a value other than undefined
  */
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useFetchList(
    currentCategory,
    searchWord
  );

  const categoryList = useFetchCategory();

  const pageRef = React.useRef();
  useIntersectionObserver({
    target: pageRef,
    onIntersect: fetchNextPage,
    enabled: !isFetchingNextPage || hasNextPage,
  });

  const inputRef = React.useRef();
  const onClickChangeCategory = (category) => {
    setCurrentCategory(() => category);
  };
  const onFocusSearchBar = () => {
    inputRef.current.focus();
  };

  return (
    <ListTemplate>
      <ListSearchBar
        searchWord={searchWord}
        onFocusSearchBar={onFocusSearchBar}
        inputRef={inputRef}
        onChangeSearchWord={onChangeSearchWord}
      />
      <ListNavigation
        currentCategory={currentCategory}
        categoryList={categoryList}
        onClickChangeCategory={onClickChangeCategory}
      />
      <ListContents data={data || []} />
      <ListFetchMoreBar ref={pageRef} />
    </ListTemplate>
  );
};

export default ListContainer;
