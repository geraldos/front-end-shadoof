import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5400'
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
