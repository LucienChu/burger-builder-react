import axios from "axios"

const instance = axios.create({
    baseURL: "https://burger-builder-ac79f.firebaseio.com/"
})

export default instance