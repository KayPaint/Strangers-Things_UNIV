import { SinglePost } from "./SinglePost.js"
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {

    return (
        <>
            <Header />
                <Link to="/posts/create" className="ui button">Create New Post</Link>
                <div className="posts-container">
                    {posts.map((item) => {
                        return <SinglePost 
                            key={item._id} 
                            title={item.title}
                            description={item.description}
                            location={item.location}
                            price={item.price}
                            willDeliver={item.willDeliver}
                            isAuthor={item.isAuthor}
                            message={item.message}
                        />
                    })}
                </div>
            <Footer />
        </>);

}

export default Posts