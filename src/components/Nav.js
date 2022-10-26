import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/posts">Posts</Link>
        </div>
    )
}

export { Nav }