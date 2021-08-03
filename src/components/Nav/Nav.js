import NavButtons, { Button } from "components/Buttons";
import styled from "styled-components";
import Logo from "./Logo";
import ProfileComp from "./ProfileComp";
import useUser from "lib/UserContext";
import { Auth } from "lib/firebase";

const Nav = () => {
    const { user, loading } = useUser();
    return (
        <StyledNav>
            <Logo />
            <div className="misc">
                {loading ? (
                    <h1>loading</h1>
                ) : !user ? (
                    <>
                        <NavButtons type="link" label="Signup" path="/signup" />
                        <NavButtons type="link" label="Login" path="/login" />
                    </>
                ) : (
                    <>
                        <ProfileComp user={user} />
                        <Button label="Log out" onClick={Auth.signOut} />
                    </>
                )}
            </div>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    padding: 0.5rem 2rem;
    align-items: center;
    .misc {
        display: block;
        width: 68%;
        display: flex;
        justify-content: flex-end;
        button,
        div,
        a {
            margin-left: 0.8rem;
        }
    }
`;

export default Nav;
