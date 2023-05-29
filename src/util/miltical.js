import { Interface } from '@ethersproject/abi'
import config from './../config'
const multicallABI = require('./../constants/abi/multicall.json')
const multicallAddress = config.multicall

const multicall = async (web3, calls, options) => {
  try {
    const multi = new web3.eth.Contract(multicallABI, multicallAddress)
    const calldata = calls.map((call, i) => {
      const itf = new Interface(call.abi)
      call.itf = itf
      return [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)]
    })
    // eslint-disable-next-line no-useless-call
    const { returnData } = await multi.methods.aggregate(calldata).call(undefined, options.blockNumber)
    const res = returnData.map((call, i) => calls[i].itf.decodeFunctionResult(calls[i].name, call))
    return res
  } catch (error) {
    throw new Error(error)
  }
}
export default multicall
