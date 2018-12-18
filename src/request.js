import axios from 'axios'
import { config } from './config'

// Set API url
const { development, production } = config.api.url
axios.defaults.baseURL = (process.env.NODE_ENV === 'development' ? development : production)

// Set authorization header if token is not empty
if (localStorage.getItem('auth')) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('auth')}`
}

export const request = axios