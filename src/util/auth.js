import moment from 'moment'
import Web3 from 'web3'

import web3Modal from '@/util/web3Modal'
import store from '@/store'
import api from '@/util/api'
import { login } from '@/store/actions/auth'
import { getWeb3 } from '@/util/web3'
import { updateConnectInfo } from '@/store/actions/connect'
import { loginToBackendWithConnectedAccount } from '@/util/nftData'

export const resetState = () => {
  store.dispatch(login({ isAuthenticated: null }))
  handleDisconnect()
}

export const getAccessToken = (authData) => {
  if (!authData) return ''
  return `${authData.token_type} ${authData.access_token}`
}

export const refreshAccessToken = async () => {
  try {
    const refreshToken = store.getState().auth?.credentials?.refresh_token || ''
    const data = await api.refreshToken(refreshToken)
    const dataAuth = {
      ...data,
      refresh_token: refreshToken,
      expired: moment().unix() + Number(data.expires_in)
    }
    // const walletAuthList = Object.assign({}, state.authList, {
    //   [state.provider.address]: dataAuth,
    // })
    store.dispatch(login(dataAuth))
    // commit(UPDATE_AUTHEN_LIST, walletAuthList)
    return data
  } catch (error) {
    resetState()
    throw error
  }
}

export const handleChangeAccount = async (
  _address,
  _provider,
  connectorId = 'injected'
) => {
  let provider
  if (_provider?.isMetaMask) provider = _provider
  else provider = await web3Modal.connectTo(connectorId)
  const web3 = getWeb3(provider)
  const address = await web3.eth.getAccounts()
  const connectedAccountInfo = await loginToBackendWithConnectedAccount({
    address: address[0],
    web3,
    provider
  })
  if (connectedAccountInfo) {
    const dataAuth = {
      ...connectedAccountInfo,
      expired: moment().unix() + Number(connectedAccountInfo.expires_in)
    }
    // const walletAuthList = Object.assign({}, this.walletAuthList, {
    //   [address]: dataAuth,
    // })

    // this.updateAuthList(walletAuthList)
    // this.updateWallet({
    //   provider: { ...dataWallet, address: address },
    // })
    store.dispatch(login({ isAuthenticated: true, ...dataAuth }))
    store.dispatch(updateConnectInfo({ address: address[0], provider }))
  }
}

export const handleDisconnect = async () => {
  let provider = store.getState().connect.connectInfo?.provider
  //   let provider = connectInfo.provider
  // if (connectInfo.address) {
  //   dispatch(updateConnectInfo({ address: '', provider: null }))
  //   web3Modal.clearCachedProvider()
  // }
  if (provider?.isMetaMask) provider = window.ethereum
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
