import { Link } from "react-router-dom";

const Links = (path, label) => {
    return <Link to={path}>{label}</Link>;
};

export default Links;
