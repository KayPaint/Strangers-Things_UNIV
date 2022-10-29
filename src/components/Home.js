import { Header } from "./Header.js"
import { Footer } from "./Footer.js"

const Home = ({guest}) => {
    return (
        <>
            <div>
                <Header />
                {guest && <h3>Currently logged in as: {guest}</h3>}
                <Footer />
            </div>
        </>
    )
}

export default Home