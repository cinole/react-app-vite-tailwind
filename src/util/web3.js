import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import config from '@/config'

// const getWeb3 = (provider) => {
//   let web3 = null
//   if (provider && provider.address && window.wallet) {
//     console.log('getWeb3-1 -->', { provider })
//     web3 = new Web3(window.wallet.currentProvider)
//   } else if (provider) {
//     console.log('getWeb3-2 -->', { provider })
//     web3 = new Web3(provider)
//   } else {
//     web3 = new Web3(config.rpcUrl)
//   }

//   web3.eth.extend({
//     methods: [
//       {
//         name: 'chainId',
//         call: 'eth_chainId',
//         outputFormatter: web3.utils.hexToNumber
//       }
//     ]
//   })
//   return web3
// }
const getWeb3 = () => {
  // Declare provider
  let provider
  // If user is on correct chain, set MetaMask as provider
  if (
    window.ethereum &&
    parseInt(window.ethereum.networkVersion) === parseInt(config.chainId)
  ) {
    provider = window.ethereum
  } else {
    provider = config.rpcUrl
  }
  return new Web3(provider)
}

const getBalanceCoin = async (address) => {
  try {
    const web3 = getWeb3()
    const wei = await web3.eth.getBalance(address)
    // return web3.utils.fromWei(wei, "ether");
    return wei
  } catch (error) {
    return 0
  }
}

const getGasPrice = async (provider = null) => {
  try {
    const myWeb3 = getWeb3(provider)
    // const rawGasPrice = await myWeb3.eth.getGasPrice();
    // console.log("---->rawGasPrice", rawGasPrice);
    // return new BigNumber(rawGasPrice).times(1.2).toFixed(0);
    const block = await myWeb3.eth.getBlock('pending')
    console.log('---->block', block)
    return block.baseFeePerGas
  } catch (error) {
    return null
  }
}

const estimateGas = async (myContract, action, params, overwrite) => {
  try {
    const gas = await myContract.methods[action](...params).estimateGas(
      overwrite
    )
    console.log('---->estimateGas', gas)
    return new BigNumber(gas).times(1.2).toFixed(0)
  } catch (error) {
    return '300000'
  }
}

const sendRawTx = async (
  provider,
  abi,
  addressContract,
  action,
  params,
  overwrite
) => {
  try {
    console.log('---->params', params)
    const myWeb3 = getWeb3(provider)
    const myContract = new myWeb3.eth.Contract(abi, addressContract)

    const gas = await estimateGas(
      myContract,
      action,
      params,
      overwrite,
      provider
    )
    console.log('--->gas: ', gas)
    overwrite.gasLimit = gas

    // overwrite.maxPriorityFeePerGas = "8000000000000";
    // overwrite.maxFeePerGas = "8000000000000";
    overwrite.maxPriorityFeePerGas = null
    overwrite.maxFeePerGas = null

    const rs = await myContract.methods[action](...params).send(overwrite)
    // update balancce user in header
    // store.dispatch("wallet/updateBalance");
    return rs
  } catch (error) {
    let _error = error
    try {
      let tmp = error.toString().replace('Error: Internal JSON-RPC error.', '')
      tmp = tmp.replace('Error: Transaction has been reverted by the EVM:', '')
      _error = JSON.parse(tmp)
      if (!_error.message && _error.error) {
        _error.message = _error.error
      }
    } catch (e) {
      // console.log("-------------------->_error--------");
      _error = error
    }
    if (_error && _error.status === false) {
      // throw new Error('TX_FAILED')
      throw _error
    }
    throw _error
  }
}

const getCurrentBlock = async () => {
  try {
    const myWeb3 = getWeb3(null)
    const currentBlock = await myWeb3.eth.getBlockNumber()
    return currentBlock
  } catch (error) {
    console.log('covertWeiToEther: ', error)
    return error
  }
}

const covertWeiToEther = (balance) => {
  try {
    const rs = Web3.utils.fromWei(balance, 'ether')
    return rs
  } catch (error) {
    console.log('covertWeiToEther: ', error)
    return error
  }
}

const coverDecimals = (decimals) => {
  return new BigNumber(10).pow(decimals)
}

export {
  estimateGas,
  coverDecimals,
  getCurrentBlock,
  getWeb3,
  getBalanceCoin,
  getGasPrice,
  sendRawTx,
  covertWeiToEther
}

export default {
  getWeb3
}
