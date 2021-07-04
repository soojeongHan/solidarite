import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Home, Post, Error } from "./pages";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={["/a", "/b"]} component={Post} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
