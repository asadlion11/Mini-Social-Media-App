import {useState}  from 'react';
const Login = (props) => {
    const [username, setUsername] = useState('');
    return(
        <div>
            <form
            onSubmit={
                (e) => {
                    e.preventDefault();
                    props.setUser(username);
                }
            }>
            <input type='text' placeholder="Username" onChange={
                (e) => {
                    setUsername(e.target.value)                   
                }
            } />
            <button type="submit">Login</button>
            </form>
        </div>
    );   
};
export default Login;