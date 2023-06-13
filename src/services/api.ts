import axios from 'axios'

import { RAPID_API_KEY } from '@env'

export const api = axios.create({
  baseURL: 'https://weatherapi-com.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
})
