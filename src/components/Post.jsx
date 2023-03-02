import { useContext } from "react";
import { UserContext } from "../App";
import { PostContext } from "../App";
const Post = ({content, image, user, id}) => {
    const userValue = useContext(UserContext);
    const currentUser = userValue == user;
    const {dispatch} = useContext(PostContext);
    const handleDelete = () => {
        dispatch({type: 'DELETE_POST', payload: {postId:id}})
    }
    return(
        <>
            <p>{content}</p>
            {image && <img src={URL.createObjectURL(image)} alt=""
            style = {{
                width: 200
            }}/>
            }
            {user && <p style={{color: currentUser && 'green'}}>{user}</p>}
            {currentUser && <button onClick={handleDelete}>Delete</button>}
        </>
    );
};
export default Post;