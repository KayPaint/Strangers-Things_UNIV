import { SinglePost } from "./SinglePost.js"
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"
import { Link } from "react-router-dom";

const Posts = ({ posts, setPosts, token, logOut, guest }) => {

    return (
        <>
            <Header logOut={logOut} guest={guest}/>
                <div className="new-post-link-cont">
                    <Link to="/posts/create" className="new-post-link">Create New Post</Link>
                </div>
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
                            setPosts={setPosts}
                            token={token}
                        />
                    })}
                </div>
            <Footer />
        </>);

}

export default Posts