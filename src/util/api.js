import http from '@/util/http'
import { env } from '@/constants/env'
const URL = env.app.apiUrl

const URLs = {
  authNonce: `${URL}/api/v1/authentication/nonce`,
  loginWithSignature: `${URL}/api/v1/authentication/token`,
  refreshToken: `${URL}/api/v1/authentication/token`,
  getUserInfo: `${URL}/api/v1/users/profile`
}

const getNonce = async (address) => {
  try {
    const params = {
      address
    }
    const result = await http.get(URLs.authNonce, { params })
    console.log('------>getNonce', result)
    return result
  } catch (error) {
    console.log(error, 'getNonce=>error')
    throw error
  }
}

const getUserInfo = async () => {
  try {
    const data = await http.get(URLs.getUserInfo)

    console.log('----------->data', data)
    return data
  } catch (error) {
    console.log(error, 'getUserInfo=>error')
    throw error
  }
}

const loginWithSignature = async (address, signature) => {
  try {
    const payload = {
      grant_type: 'signature',
      address,
      signature
    }
    const data = await http.post(URLs.loginWithSignature, payload)
    return data
  } catch (error) {
    console.log(error, 'loginWithSignature=>error')
    throw error
  }
}

const refreshToken = async (refreshToken) => {
  try {
    console.log('------>refreshToken', refreshToken)
    const payload = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }
    const data = await http.post(URLs.refreshToken, payload)
    return data
  } catch (error) {
    console.log(error, 'refreshToken=>error')
    throw error
  }
}

export default {
  getNonce,
  getUserInfo,
  refreshToken,
  loginWithSignature
}
