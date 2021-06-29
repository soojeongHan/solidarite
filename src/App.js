import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Error from "./pages/Error";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={["/a", "/b"]} component={Detail} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );
}

export default App;
