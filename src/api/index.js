export const BASE_URL = "https://strangers-things.herokuapp.com/api";
export const KEY = "2207-FTB-ET-WEB-PT";

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/${KEY}/posts`);
        const data  = await response.json();
        return data.data.posts;
    } catch (error) {
        console.error("An error occured while attempting to fetch posts.");
    }
}