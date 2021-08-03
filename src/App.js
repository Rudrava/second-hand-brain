import Nav from "components/Nav/Nav";
import Login from "pages/Login";
import Root from "pages/Root";
import Signup from "pages/Signup";
import { Route, Switch, useHistory } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "components/PrivateRoute";
import useUser from "lib/UserContext";
import { useEffect } from "react";

function App() {
    const { user } = useUser();
    const history = useHistory();
    useEffect(() => {
        user && history.push("/");
    }, [user, history]);
    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute path="/">
                    <Root />
                </PrivateRoute>
            </Switch>
            <Toaster />
        </div>
    );
}

export default App;
