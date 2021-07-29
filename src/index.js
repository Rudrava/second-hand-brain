import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "lib/UserContext";

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <Router>
                <GlobalStyle />
                <App />
            </Router>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
