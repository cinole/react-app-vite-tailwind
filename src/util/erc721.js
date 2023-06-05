import abi from '@/constants/abi/erc721.json'
import store from '@/store'
import { getWeb3, sendRawTx } from '@/util/web3'

const approveProxy = async (provider, account, tokenAddress, sender) => {
  const overwrite = { from: account }

  const res = await sendRawTx(
    provider,
    abi,
    tokenAddress,
    'setApprovalForAll',
    [sender, true],
    overwrite
  )
  return res
}

const isApproveProxy = async (account, tokenAddress, sender) => {
  try {
    if (!account) return
    console.log('----------isApproveProxy', { account, tokenAddress, sender })
    const myWeb3 = getWeb3()
    const nftContract = new myWeb3.eth.Contract(abi, tokenAddress)
    const isApprovedForAll = await nftContract.methods
      .isApprovedForAll(account, sender)
      .call()
    console.log('----------12', isApprovedForAll)
    return isApprovedForAll
  } catch (error) {
    console.log('----------', error)
    return false
  }
}

export const isApproveProxy721 = async (tokenAddress, spender) => {
  const myAddress = store.getState().connect.connectInfo?.address
  if (!myAddress) return
  const allowance = await isApproveProxy(myAddress, tokenAddress, spender)
  return allowance
}

export const approveProxy721 = async (tokenAddress, spender) => {
  const { address, provider } = store.getState().connect.connectInfo
  const allowance = await approveProxy(provider, address, tokenAddress, spender)
  return allowance
}

export default {
  isApproveProxy721,
  approveProxy721
}
