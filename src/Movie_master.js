
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function Movie_master() {
    return(
    <Router>
        <Switch>
            <Route path="/movie">
                <Detail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>);

}
export default Movie_master;