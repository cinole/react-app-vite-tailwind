import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import config from '@/config'

const network = config.chainId === 56 ? { network: 'binance' } : {}

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options:
    {
      ...network,
      chainId: config.chainId,
      rpc: {
        [config.chainId]: config.rpcUrl
      }
    }
  }
}

const web3Modal = new Web3Modal({
  // network: "testnet", // optional
  cacheProvider: false, // optional
  providerOptions, // required
  disableInjectedProvider: false // optional. For MetaMask / Brave / Opera.
})

export default web3Modal
