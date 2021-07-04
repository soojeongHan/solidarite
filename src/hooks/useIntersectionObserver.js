import React from "react";

const useIntersectionObserver = ({ target, onIntersect, enabled = true }) => {
  React.useEffect(() => {
    if (!enabled) return;

    let observer;

    if (target.current) {
      observer = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) onIntersect();
      });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [enabled, onIntersect, target]);
};

export default useIntersectionObserver;
