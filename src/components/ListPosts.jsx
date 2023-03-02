import Post from './Post';
const ListPosts = ({posts}) => {
    return (
        posts.map((post, index) => (
            <Post key = {index} {...post}/>
        ))
    );
};
export default ListPosts; 