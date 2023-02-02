const BASE_URL = 'http://www.omdbapi.com/'
const API_KEY = '38a8b9a9'

export async function apiCall(optional) {
    const url = `${BASE_URL}${optional}&apikey=${API_KEY}`
    console.log(url)
    const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => data)
        .catch((err)=> console.log(err))
    console.log("apicall ", optional)
    return response
}