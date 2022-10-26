const SinglePost = (props) => {

    const { title, description, location, price, willDeliver } = props

    return (
        <div className="card">
            <div className="content">
                <div className="card-title">
                    <h3>{title}</h3>
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
            </div>
        </div>
    )
}

export { SinglePost }