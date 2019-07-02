import axios from 'axios'
const api = axios.create({
  baseURL: api_url,
  headers: {
    'Content-Type': 'application/json'
  },
  data: {},
  timeout: 60000
});
export default {
  authpost(uri, data){
    return authapi.post(uri,data)
  },
  get(uri, params, data) {
    const getURL = `${api_url}${uri}`
    const headers = {
        "Content-Type": "application/json"
    }

    return axios.get( getURL, { headers, params }  )
  }
}
