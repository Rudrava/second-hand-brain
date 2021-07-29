import useUser from "lib/UserContext";
import { Link, Route } from "react-router-dom";
import { PageGrid } from "./PageComp.sc";

const PrivateRoute = ({ path, children }) => {
    const { user, loading } = useUser();
    return (
        <Route
            exact
            path={path}
            render={() =>
                loading ? (
                    <PageGrid center="true">
                        <h1>Loading</h1>
                    </PageGrid>
                ) : user ? (
                    <PageGrid> {children}</PageGrid>
                ) : (
                    <PageGrid center="true">
                        <h1
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            You are not logged in please
                            <Link to="Login" style={{ display: "inline" }}>
                                Login
                            </Link>
                            to continue
                        </h1>
                    </PageGrid>
                )
            }
        />
    );
};

export default PrivateRoute;
