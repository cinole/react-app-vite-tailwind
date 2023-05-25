import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext
} from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import usePromptNetwork from '@/hooks/useNetworkPrompt'
import config from './../config'
// import { login } from '@/store/actions/auth'
// import { updateConnectInfo } from '@/store/actions/connect'
import { handleChangeAccount } from '@/util/auth'

const Web3Context = createContext()

export const Web3ContextProvider = ({ children }) => {
  const { pathname } = useLocation()
  const [currentAccount, setCurrentAccount] = useState(null)
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
        if (location?.pathname.includes('mint')) window.location.reload()
        // dispatch(login({ isAuthenticated: null }))
        // dispatch(
        //   updateConnectInfo({
        //     address: window.ethereum?.selectedAddress,
        //     provider: window.ethereum,
        //   })
        // )
        if (location?.pathname.includes('staking')) handleChangeAccount(window.ethereum?.selectedAddress, window.ethereum)
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
      if (window.ethereum.networkVersion !== process.env.REACT_APP_CHAIN_ID) {
        toast.error(`Make sure you're on ${config.networkName}!`)
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  // run when current account changes
  useEffect(() => {
    if (['/mint', '/staking', '/reservation'].includes(pathname) && currentAccount) checkNetwork()
  }, [currentAccount])

  // MetaMask popup to connect wallet
  const connectWallet = useCallback(async () => {
    if (!window.ethereum) {
      toast('You need MetaMask to connect your wallet.', { type: 'error' })
      return
    }

    setLoading(() => true)

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
      loading,
      setLoading
    }),
    [checkNetwork, currentAccount, connectWallet, loading, setLoading]
  )

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>
}

export const useWeb3Context = () => useContext(Web3Context)

export default Web3Context
