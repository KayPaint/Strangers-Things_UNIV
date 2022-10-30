import React from "react";
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"
import { fetchGuest } from "../api/index.js";

const Profile = ({ guest, logOut, token }) => {

    const getGuest = async () => {
        try {
            const response = await fetchGuest(token);
            console.log("getGuest Response:", response)
            return response
        } catch (error) {
            console.error("getGuest failed:", error)
        }
    };

    return (<>
        <Header 
            guest={guest} 
            logOut={logOut}
        />
        <div>PROFILE</div>
        <Footer />
    </>);
}

export default Profile;