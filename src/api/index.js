export const BASE_URL = "https://strangers-things.herokuapp.com/api";
export const KEY = "2207-FTB-ET-WEB-PT";

// API HELPER FUNCTIONS

const headerAPI = (token) => {
    const headers = {
        "Content-Type": "application/json"
    }

    if (token) {
        headers["Authorization"] = `Bearer ${token}`
    }}

const callAPI = async (endpoint, defaultOptions={}) => {
    const options = {
        headers: headerAPI(defaultOptions.token),
    };

    if (defaultOptions.method) {
        options.method = defaultOptions.method;
    }

    if (defaultOptions.body) {
        options.body = JSON.stringify(defaultOptions.body);
    }
    
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);
    const result = await response.json();

    return result;
}


// GET REQUESTS

// export const fetchPosts = async () => {
//     try {
//         const {success, error, data} = await callAPI('/posts');

//         if (success) {
//             return {
//                 error: null,
//                 posts: data.posts   
//             }
//         } else {
//             return {
//             error: error.message,
//             posts: []
//         }}
//     } catch (error) {
//         console.error("An error occured while attempting to fetch posts.", error);
//         return {
//             error: "Fetching posts has failed",
//             posts: []
//         }
//     }
// }

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


// POST REQUESTS

// export const registerUser = async(username, password) => {
//     try {
//         const {success, error, data} = await callAPI('/users/register', {
//             method: 'POST',
//             body: {
//                 user: {
//                     username,
//                     password
//                 }
//             }
//         });
    
//         if (success) {
//             return {
//                 error: null,
//                 token: data.token,
//                 message: data.message
//             }
//         } else {
//             return {
//                 error: error.message,
//                 token: null,
//                 message: null
//             }
//         } 
//     } catch (error) {
//         console.error("An error occured while attempting to register user", error)

//         return {
//             error: "Registration has failed",
//             token: null,
//             message: null
//         }
//     }
// }

export const registerUser = async(username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/${KEY}/users/register`, {
            method: "POST",
            headers: headerAPI(),
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
            })
        });
        const data = await response.json()
        console.log("createPost data:", data)
        return data;
    } catch (error) {
        console.error("An error occured while attempting to create post")
    }
}