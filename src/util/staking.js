import abi from '@/constants/abi/staking.json'
import api from './api'
import store from '@/store'
import { env } from '@/constants/env'
import { getLocalStorage } from '@/util/helpers'
import { getWeb3, sendRawTx } from '@/util/web3'
import { personalSignWithNonce } from '@/util/nftData'

const contract = env.app.contractAddress.staking
const getContract = () => {
  const myWeb3 = getWeb3()
  const nftContract = new myWeb3.eth.Contract(abi, contract)
  return nftContract
}

export const readPeriodStatusForBox = async () => {
  const web3 = getContract()
  const res = await web3.methods.stakeOneStatus().call()
  return res
}

export const readItemPeriodStatusForBox = async (type = 1, seconds) => {
  const web3 = getContract()
  const res = await web3.methods.periods(type, seconds).call()
  return res
}

export const stakingOneBox = async (provider, account, data) => {
  console.log('---------->data', data)
  const { token_id, rarity, period, signature } = data
  const overwrite = { from: account }
  const res = await sendRawTx(
    provider,
    abi,
    contract,
    'stakeOne',
    [token_id, rarity, period, signature],
    overwrite
  )
  return res
}

export const claimOneBox = async (provider, account, data) => {
  console.log('---------->data', data)
  const { token_id, reward_nft, timestamp, claim_id, signature } = data
  const overwrite = { from: account }
  const res = await sendRawTx(
    provider,
    abi,
    contract,
    'claimOne',
    [token_id, reward_nft, timestamp, claim_id, signature],
    overwrite
  )
  return res
}

export const unstakingOneBox = async (provider, account, data) => {
  console.log('---------->data', data)
  const { token_id } = data
  const overwrite = { from: account }
  const res = await sendRawTx(
    provider,
    abi,
    contract,
    'unstakeOne',
    [token_id],
    overwrite
  )
  return res
}
