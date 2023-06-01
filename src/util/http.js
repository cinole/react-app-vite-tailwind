// import _ from 'lodash'
import axios from 'axios'

// import store from '@/store'
import { env } from '@/constants/env'
// import { getAccessToken, refreshAccessToken, resetState } from '@/util/auth'

export const http = axios.create({
  baseURL: env.app.apiUrl,
  timeout: 60000
})

let isAlreadyFetchingAccessToken = false
let subscribers = []

// const onAccessTokenFetched = (access_token) => {
//   const mappedSubcribers = [...subscribers]
//   mappedSubcribers.forEach((callback) => callback(access_token))
//   subscribers = []
// }

const addSubscriber = (callback) => {
  subscribers.push(callback)
}

// const resetStateAndDisconnect = _.debounce(() => {
//   resetState()
// }, 1000)

// Add a request interceptor
http.interceptors.request.use(
  (config) => {
    config.headers.common['Accept-Language'] =
      window.localStorage.getItem('locale') || env.app.locale

    const accessToken = '' // getAccessToken(store.getState().auth.credentials)
    // console.log({ http: store.getState().auth.credentials })
    // accessToken && console.log('accessToken-->', accessToken)
    if (accessToken) {
      config.headers.Authorization = accessToken
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Add a response interceptor
http.interceptors.response.use(
  (response) => {
    // Return JSON data
    if (response.data) {
      if (response.data.data) {
        return response.data.data
      }
      return response.data
    }
    return response
  },
  async (error) => {
    const { config } = error
    const originalRequest = config
    const err = (error.response && error.response.data) || error
    if (
      (error.response && [401, 403].includes(error.response.status)) ||
      (err?.error && err?.message?.name === 'TokenExpiredError')
    ) {
      if (!isAlreadyFetchingAccessToken) {
        try {
          isAlreadyFetchingAccessToken = true
          // const data = await refreshAccessToken()
          // if (data.access_token) {
          //   isAlreadyFetchingAccessToken = false
          //   onAccessTokenFetched(data.access_token)
          // }
        } catch (err) {
          // resetStateAndDisconnect()
          return Promise.reject(err)
        }
      } // else resetStateAndDisconnect()

      const retryOriginalRequest = new Promise((resolve) => {
        addSubscriber(async (access_token) => {
          originalRequest.headers.Authorization = `Bearer ${access_token}`
          const res = await axios(originalRequest)
          if (res.data) {
            resolve(res.data)
          }
          resolve(res)
          // resolve(axios(originalRequest));
        })
      })
      return retryOriginalRequest
    }

    if (error.response && error.response.status) {
      err.status = error.response.status
    }

    return Promise.reject(err)
  }
)
export default http
