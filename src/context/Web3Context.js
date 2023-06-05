import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext
} from 'react'
import useMobileDetect from 'use-mobile-detect-hook'
// import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import usePromptNetwork from '@/hooks/useNetworkPrompt'
import web3Modal from '@/util/web3Modal'
import config from '@/config'
const env = import.meta.env
// import { login } from '@/store/actions/auth'
// import { updateConnectInfo } from '@/store/actions/connect'
// import { handleChangeAccount } from '@/util/auth'

export const Web3Context = createContext()

const Web3ContextProvider = ({ children }) => {
  // const { pathname } = useLocation()
  const detectMobile = useMobileDetect()
  const [currentAccount, setCurrentAccount] = useState(null)
  const [provider, setProvider] = useState(null)
  const [loading, setLoading] = useState(false)
  const { checkNetwork: isOnRightNetwork, connectToNetwork } = usePromptNetwork()

  // run when app mounts
  useEffect(() => {
    // check for connected wallet and set current account
    const checkWallet = async () => {
      if (!window.ethereum) return

      // Set window.ethereum events
      window.ethereum.on('chainChanged', async () => {
        if (!isOnRightNetwork()) await connectToNetwork()
        // window.location.reload()
      })
      window.ethereum.on('accountsChanged', () => {
        setCurrentAccount(window.ethereum?.selectedAddress) 
      })

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts'
        })

        if (accounts.length !== 0) {
          const account = accounts[0]
          setCurrentAccount(() => account)
        }
      } catch (e) {
        if (e.code === 4001) {
          toast.error('Please connect to MetaMask.')
        } else console.error(e)
      }
    }

    checkWallet()
  }, [])

  // check network matches contract chain id
  const checkNetwork = useCallback(async () => {
    try {
      if (window.ethereum.networkVersion !== env.REACT_APP_CHAIN_ID) {
        toast.error(`Make sure you're on ${config.networkName}!`)
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  // run when current account changes
  useEffect(() => {
    // if (['/mint', '/staking', '/reservation'].includes(pathname) && currentAccount) 
    checkNetwork()
  }, [currentAccount])

  // MetaMask popup to connect wallet
  const connectWallet = useCallback(async (connectorId) => {
    if (!window.ethereum) {
      toast('You need MetaMask to connect your wallet.', { type: 'error' })
      return
    }

    setLoading(() => true)
    if (!checkNetwork()) await connectToNetwork()

    // #region metamask mobile
    if (connectorId === 'injected') {
      const userAgent = window.navigator.userAgent.toLowerCase()
      const safari = /safari/.test(userAgent)
      const ios = /iphone|ipod|ipad/.test(userAgent)
      const metamaskUrl = `https://metamask.app.link/dapp/${window.location.host}/mint`
      if (ios) {
        if (safari) {
          // browser
          window.open(metamaskUrl, '_self')
        }
      } else if (detectMobile.isMobile()) {
        if (!userAgent.includes('wv')) {
          window.open(metamaskUrl, '_self')
        }
      }
    }
    // #endregion

    if (window.ethereum && window.ethereum.isSafePal) {
      return window.ethereum
    }

    const _provider = await web3Modal.connectTo(connectorId)
    setProvider(_provider)

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })

      const account = accounts[0]

      setCurrentAccount(() => account)
    } catch (e) {
      if (e.code === 4001) {
        toast('Please connect to MetaMask.', { type: 'error' })
      } else {
        console.error(e)
      }
    }

    setLoading(() => false)
  }, [])

  const value = useMemo(
    () => ({
      checkNetwork,
      currentAccount,
      connectWallet,
      provider,
      loading,
      setLoading
    }),
    [checkNetwork, currentAccount, connectWallet, loading, setLoading, provider]
  )

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>
}

export const useWeb3Context = () => useContext(Web3Context)

export default Web3ContextProvider