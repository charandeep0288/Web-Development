import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./MainPage";
import User from "./User";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom" ;

ReactDOM.render(
    <Router>
        <Switch>

            <Route path="/user/:id">
                <User />
            </Route>

            <Route path="/">
                <MainPage />
            </Route>

        </Switch>
    </Router>,
    document.querySelector("#root"));