import Web3 from 'web3'
import moment from 'moment'

import api from './api'
import store from '@/store'
import tokens from '@/constants/tokens.js'
import web3Modal from '@/util/web3Modal'
import { updateConnectInfo } from '@/store/actions/connect'
import { setLocalStorage } from '@/util/helpers'
import { errorNotify } from './helpers'
import { resetState } from './auth'

export const loginToBackendWithConnectedAccount = async ({
  web3,
  address,
  provider,
  connectorId
}) => {
  try {
    if (address && web3) {
      const nonce = await api.getNonce(address)
      console.log('-------nonce', nonce)
      const signature = await personalSignWithNonce({
        web3,
        nonce,
        address
      })
      const result = await api.loginWithSignature(address, signature)
      const chainId = await web3.eth.net.getId()
      const dataWallet = {
        isMetaMask: provider.isMetaMask ? provider.isMetaMask : false,
        chainId,
        address,
        type: connectorId
      }
      setLocalStorage('biowebsite-home', {
        auth: { isAuthenticated: true, ...result, nonce },
        wallet: {
          address,
          provider: dataWallet
        }
      })
      return { ...result, nonce }
    }
  } catch (error) {
    console.error('loginToBackendWithConnectedAccount err: ', error)
    resetState()
    // resetApp({ provider })
    if (
      error.code === 'INVALID_SIGNATURE' ||
      error.errors === 'INVALID_SIGNATURE'
    ) {
      errorNotify({ message: 'Invalid signature' })
    } else {
      errorNotify({ message: error })
    }
  }
}

export const personalSignWithNonce = async ({ web3, nonce, address }) => {
  // const signMessage = `I am signing my one-time nonce: ${nonce}`;
  const signMessage = `I am signing: ${nonce}`
  const signature = await web3.eth.personal.sign(
    signMessage,
    address,
    '' // MetaMask/WC will ignore the password argument here
  )
  return signature
}

export const resetApp = async ({ provider: _provider }) => {
  let provider = _provider
  // if (connectInfo.address) {
  //   dispatch(updateConnectInfo({ address: '', provider: null }))
  //   web3Modal.clearCachedProvider()
  // }
  if (provider.isMetaMask) provider = window.ethereum
  else {
    if (!window.wallet) {
      store.dispatch(updateConnectInfo({ address: '', provider: null }))
      return
    }
    provider = window.wallet.currentProvider
  }
  const web3 = new Web3(provider)
  if (web3?.currentProvider?.close) {
    await web3.currentProvider.close()
    if (window.wallet) window.wallet.currentProvider.close()
  }
  // console.log(web3, window)
  await web3Modal.clearCachedProvider()
  store.dispatch(updateConnectInfo({ address: '', provider: null }))
}

const _arrToOjbAtr = (data) => {
  if (!data || !data.length) return {}
  const obj = data.reduce((obj, cur) => {
    obj[cur.trait_type] = cur.value
    return obj
  }, {})
  return obj
}
