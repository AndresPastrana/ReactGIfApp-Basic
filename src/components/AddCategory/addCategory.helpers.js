import axios from 'axios'
export const getGifs = async (q) => {

    const resp = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=mJdO2lUKNPWP49N9VB9gwBgBv2sWJNPV&q=${q}&limit=5`)
    const { data } = resp.data;

    const gifList = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            img: gif.images.downsized_medium.url
        }
    })

    return gifList;
}



export const isValid = (str) => {
    return str && str.length > 3
}
