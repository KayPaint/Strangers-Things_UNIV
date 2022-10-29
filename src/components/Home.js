import { Header } from "./Header.js"
import { Footer } from "./Footer.js"

const Home = ({guest}) => {
    return (
        <>
            <div>
                <Header />
                {guest ? <h3 id="current-user">You are currently logged in as: {guest}</h3> : <h3 id="current-user">Welcome to Stranger's Things</h3>}
                <Footer />
            </div>
        </>
    )
}

export default Home