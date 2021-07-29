import styled from "styled-components";

const ProfileComp = ({ user }) => {
    return (
        <StyledProfile>
            <img
                src={
                    user.photoURL ||
                    "https://d2jqdfju7ec8o3.cloudfront.net/2019/21/j6g7dw/7tg8hq.snsg8c.im.lg.jpg"
                }
                alt="edi"
            />
        </StyledProfile>
    );
};

const StyledProfile = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    overflow: hidden;
    img {
        height: 100%;
        width: 100%;
    }
`;

export default ProfileComp;
