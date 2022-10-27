export const BASE_URL = "https://strangers-things.herokuapp.com/api";
export const KEY = "2207-FTB-ET-WEB-PT";

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/${KEY}/posts`);
        const data  = await response.json();
        return data.data.posts;
    } catch (error) {
        console.error("An error occured while attempting to fetch posts.", error);
    }
}

export const fetchGuest = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/${KEY}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },    
        });
        const {data} = await response.json()
        console.log("User Data:", data)
        return data;
    } catch (error) {
        console.error("An error occured while attempting to fetch user", error)
    }
}

export const registerUser = async(username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/${KEY}/users/register`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username,
                password
              }
            })  
        });
        const data = await response.json()
        console.log("registerUser data:", data)
        return data;
    } catch(error) {
        console.error("An error occured while attempting to register user.", error)
    }
};

export const loginUser = async(username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/${KEY}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        });
        const data = await response.json()
        console.log("loginUser data:", data)
        return data;
    } catch (error) {
        console.error("An error occured while attempting to login user")
    }
}