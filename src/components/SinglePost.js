import { Button } from "@mui/material"
import { deletePost } from "../api"
const SinglePost = (props) => {
                                            // Add messages back to here when they exist
    const { title, description, location, price, willDeliver, isAuthor, setPosts, token } = props
    const message = [{ 
        fromUser: {
            username: 'FAKE USERNAME'
        },
        content: "FAKE COMMENT" 

    }]

    const handleDelete = async (postID) => {
        await deletePost(token, postID)
        setPosts((prevPosts) => prevPosts.filter((post) => post._id != postID))
    }

    return (
        <div className="card">
            <div className="content">
                <div className="card-title">
                    <h2>{title}</h2>
                </div>
                <div className="card-description">
                    <h3>Info: {description}</h3>
                </div>
                <div className="card-location">
                    <h3>Location: {location}</h3>
                </div>
                <div className="card-price">
                    <h3>Price: {price}</h3>
                </div>
                <div className="card-deliver">
                    <h3>Will Deliver? {willDeliver ? "Yes" : "No"}</h3>
                </div>
                <br />
                
                {isAuthor ? <h4>You posted this listing</h4> : null}
                    {/* ^^ This does not work, unsure why ^^ */}

                {isAuthor ? <Button onClick={(() => handleDelete(post._id))}>
                    DELETE
                </Button> : null}
                    {/* Much like the use of isAuthor above, this doesnt work*/}
                
                <div>
                    {message.map((comment) => {
                        return (
                            <div>
                                <span>{comment.fromUser.username}</span>
                                <p>{comment.content}</p>
                            </div>
                        )
                    })}
                    {/*  ^^^ This works, but if there are no messages its broken */}
                </div>
            </div>
        </div>
    )
}

export { SinglePost }