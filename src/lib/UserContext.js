import { createContext } from "react";
import { auth } from "./firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";

const UserContext = createContext({ user: {}, loading: true, error: false });
export const UserProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <UserContext.Provider value={{ user, loading, error }}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => useContext(UserContext);

export default useUser;
