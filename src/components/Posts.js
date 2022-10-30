import { useState, useEffect } from "react";
import { SinglePost } from "./SinglePost.js"
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"
import { Link } from "react-router-dom";

const Posts = ({ posts, setPosts, token, logOut, guest }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);

    useEffect(() => {
        if (searchTerm) {
            console.log(searchTerm)
            const searchTerms = searchTerm.toLowerCase().trim().split(' ');
            console.log(searchTerms)
            const filtered = posts.filter((postObject) => {
                const filterableAttributes = [
                    postObject.title,
                    postObject.description,
                    postObject.location,
                ];

                for (let value of filterableAttributes) {
                    const valueLowerCase = value.toLowerCase().trim();
                    for (let term of searchTerms) {
                        if (valueLowerCase.includes(term)) {
                            return true;
                        }
                    }
                };
                return false;
            });
            setFilteredPosts(filtered)
            console.log("These are the filtered posts", filteredPosts)
        } else {
            setFilteredPosts(posts)
        }
    }, [searchTerm, posts])

    return (
        <>
            <Header logOut={logOut} guest={guest}/>
            <div className="search-bar-cont">
                <input 
                    className="search-bar" 
                    type="text" 
                    placeholder="Search" 
                    value={searchTerm} 
                    onChange={((event) => setSearchTerm(event.target.value))}
                />
            </div>
            <div className="new-post-link-cont">
                <Link to="/posts/create" className="new-post-link">Create New Post</Link>
            </div>
            <div className="posts-container">
                {filteredPosts.map((item) => {
                    return <SinglePost 
                        key={item._id} 
                        id={item._id}
                        title={item.title}
                        description={item.description}
                        location={item.location}
                        price={item.price}
                        willDeliver={item.willDeliver}
                        isAuthor={item.isAuthor}
                        messages={item.messages}
                        posts={posts}
                        setPosts={setPosts}
                        token={token}
                    />
                })}
            </div>
            <Footer />
        </>);

}

export default Posts