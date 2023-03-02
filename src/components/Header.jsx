import { useContext } from "react";
import { UserContext } from "../App";
const Header = ({setUser}) => {
    const user = useContext(UserContext);
    return (
        <>
            <span>Welcome {user} </span>
            <button
            onClick={() => {
                setUser('');
            }}>Logout</button>
        </>
    );
};
export default Header;