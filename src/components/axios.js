import axios from 'axios'
const instance = axios.create({
 baseURL: "https://short-video-mern1.herokuapp.com/"
})
export default instance