import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div>
                <h3>Welcome to...</h3>
                <h1>Stranger's Things!</h1>
            </div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/posts">Posts</Link>
            </ul>
        </div>
    )
}

export default Home