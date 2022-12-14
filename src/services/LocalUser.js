import axios from 'axios'

const apiLocalUser = axios.create({
  baseURL: ' http://localhost:3000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  postUser(user) {
    return apiLocalUser.post('/users', user)
  },
}
