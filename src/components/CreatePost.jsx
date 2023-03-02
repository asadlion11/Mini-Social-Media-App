import { useState, useRef, useContext } from "react";
import { PostContext } from "../App";
const CreatePost = ({user}) => {
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const contentRef = useRef();
    const {dispatch} = useContext(PostContext);
    const handleSubmit = (e) => {       
            e.preventDefault()
            const newPost = {content, image,user, id : Date.now()};
            // setPosts([newPost, ...posts,]);
            dispatch({ type: 'ADD_NEW_POST', payload: {post: newPost}});
            setContent('');
            setImage(null);
            imageRef.current.value = '';
            contentRef.current.focus();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create Post</h1>
                <input type = 'text' placeholder = 'Post content' value = {content}
                ref = {contentRef}
                onChange={
                    (e) => setContent(e.target.value)
                }/>
                <input type = 'file'
                ref= {imageRef}
                onChange = {
                    (e) => setImage(e.target.files[0])
                }/>
                <button type="submit">Submit</button>
            </form>
            {/* <p>{content}</p>
            {image && <img src={URL.createObjectURL(image)} alt="" 
            style ={{
                width: 500
            }}/>}            */}
        </>
    );
};
export default CreatePost;