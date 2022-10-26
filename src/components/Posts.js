import { useEffect } from "react";
import { fetchPosts } from "../api"
import { SinglePost } from "./SinglePost.js"

const Posts = (props) => {

    const { posts, setPosts } = props

    useEffect(() => {
        const getPosts = async () => {
            try {
                let response = await fetchPosts();
                console.log("Response", response)
                setPosts(response)
                return response;    
            } catch {
                console.error()
            }
        } 
        getPosts()
    }, []);

    return (<>
        <div className="posts-container">
            {posts.map((item) => {
                return <SinglePost 
                    key={item._id} 
                    title={item.title}
                    description={item.description}
                    location={item.location}
                    price={item.price}
                    willDeliver={item.willDeliver}
                    />
            })}
        </div>
    </>);

}

export default Posts