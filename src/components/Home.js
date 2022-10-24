import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div>
                <h3 id="welcome-one">Welcome to...</h3>
                <h1 id="welcome-two">Stranger's Things!</h1>
            </div>
            <div id="nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
                <Link className="nav-link" to="/posts">Posts</Link>
            </div>
        </div>
    )
}

export default Home