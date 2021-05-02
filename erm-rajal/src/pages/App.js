import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexHome from "./Home";
import IndexAnak from "./poliAnak";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexHome} />
        <Route exact path="/poli-anak" component={IndexAnak} />
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={ErrorPage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
