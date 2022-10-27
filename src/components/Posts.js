
import { SinglePost } from "./SinglePost.js"
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"

const Posts = ({ posts }) => {

    return (<>
        <Header />
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
        <Footer />
    </>);

}

export default Posts