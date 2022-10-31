export const BASE_URL = "https://strangers-things.herokuapp.com/api";
export const KEY = "2207-FTB-ET-WEB-PT";

// GET REQUESTS
export const fetchPosts = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/${KEY}/posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
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
        const {data} = await response.json();
        return data;
    } catch (error) {
        console.error("An error occured while attempting to fetch user", error)
    }
}

// POST REQUESTS
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
        const data = await response.json();
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
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occured while attempting to login user", error)
    }
}

export const createPost = async (token, title, description, location, price, willDeliver) => {
    try {
        const response = await fetch(`${BASE_URL}/${KEY}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    location: location,
                    price: price,
                    willDeliver: willDeliver
                }
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occured while attempting to create post", error)
    }
}

export const addMessage = async (token, postID, message) => {
    try {
        const response = await fetch(`${BASE_URL}/${KEY}/posts/${postID}/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                  content: `${message}`
                }
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occured while attempting to create comment", error)
    }
    
}

// DELETE REQUESTS 
export const deletePost = async (token, postID) => {
    try {
        await fetch(`${BASE_URL}/${KEY}/posts/${postID}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.error("An error occured while attempting to delete post:", error)
    }
}