import {useState, useEffect, createContext, useContext ,useReducer} from 'react';
import Login from './components/Login';
import Header from './components/Header'
import CreatePost from './components/CreatePost';
import ListPosts from './components/ListPosts';
import postReducer from './postReducer';
export const UserContext = createContext();
export const userStateContext = createContext();
export const PostContext = createContext({
    posts: []
});
const App = () => {
    const [user,setUser] = useState('');
    //const [posts, setPosts] = useState([]);
    const initialPostState = useContext(PostContext);
    const [state, dispatch] = useReducer(postReducer, initialPostState);
    useEffect (() => {
        document.title = user ? `${user}'s feed` : 'Please Login';
    },[user])   
    if(!user) return <Login setUser = {setUser}/>
    return (
        <PostContext.Provider value = {{state, dispatch}}>
            <UserContext.Provider value = {user}>
                <Header setUser = {setUser} />
                <CreatePost user = {user}/>
                <ListPosts posts = {state.posts} />
            </UserContext.Provider>
        </PostContext.Provider>
    );
};
export default App;
