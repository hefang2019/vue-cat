import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8999/admin/api'
})

export default http