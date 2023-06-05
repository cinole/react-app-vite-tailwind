import { useEffect, useState } from 'react'
import config from './../config'
import { COINS_MINT } from '@/constants'

const usePromptNetwork = () => {
  const [networkPrompt, setNetworkPrompt] = useState(false)
  const { ethereum } = window

  const checkNetwork = () => {
    return ethereum && ethereum.networkVersion === config.chainId.toString()
  }

  const connectToNetwork = async (provider = ethereum) => {
    const metamaskConstant = {
      chainId: `0x${config.chainId.toString(16)}`,
      chainName: config.networkName,
      nativeCurrency: {
        name: COINS_MINT[config.chainId].symbol,
        symbol: COINS_MINT[config.chainId].symbol,
        decimals: COINS_MINT[config.chainId].decimals
      },
      rpcUrls: [config.rpcUrl],
      blockExplorerUrls: [config.scanUrl]
    }

    try {
      if ([5, 1, 4, 3, 42161].includes(config.chainId)) {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${config.chainId.toString(16)}` }]
        })
      } else {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [metamaskConstant]
        })
      }
    } catch (error) {
      console.log('-->error', error, error.code)
      if (error.code === 4902) {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [metamaskConstant]
        })
      }
    }
  }

  useEffect(() => {
    if (!networkPrompt) {
      if (ethereum && ethereum.networkVersion !== config.chainId.toString()) {
        connectToNetwork(ethereum)
        setNetworkPrompt(true)
      }
    }
  }, [networkPrompt, ethereum])

  return { checkNetwork, connectToNetwork }
}

export default usePromptNetwork
