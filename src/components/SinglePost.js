const SinglePost = (props) => {

    const { title, description, location, price, willDeliver, isAuthor, message } = props

    return (
        <div className="card">
            <div className="content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div>
                    {isAuthor ? (<h4>You posted this listing</h4>) : null}
                    {/* ^^ This does not work, unsure why ^^ */}
                </div>
                <div className="card-description">
                    <p>Info: {description}</p>
                </div>
                <div className="card-location">
                    <p>Location: {location}</p>
                </div>
                <div className="card-price">
                    <p>Price: {price}</p>
                </div>
                <div className="card-deliver">
                    <p>Will Deliver? {willDeliver ? "Yes" : "No"}</p>
                </div>
                <br />
                <div>
                    {/* {message.map((comment) => {
                        return (
                            <div>
                                <span>{comment.fromUser.username}</span>
                                <p>{comment.content}</p>
                            </div>
                        )
                    })} */}
                </div>
            </div>
        </div>
    )
}

export { SinglePost }