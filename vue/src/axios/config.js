import axios from 'axios'

const json = 'https://jsonplaceholder.typicode.com/'
const instance = axios.create({
  baseURL: json
})

export default instance
