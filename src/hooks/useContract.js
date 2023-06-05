import { useState, useEffect, useContext, useCallback, useMemo } from 'react'
import Web3 from 'web3'
import Web3Context from '../context/Web3Context'
import { GENESIS_INO_ABI } from '@/constants'
import config from './../config'
import multicall from './../util/miltical'
import Bignumber from 'bignumber.js'
import { toast } from 'react-toastify'
const types = ['success', 'info', 'warning', 'error']
const stages_id = [1, 2, 3, 4, 5]
const issue_id = [1, 2, 3]

const useContract = () => {
  const { setLoading } = useContext(Web3Context)
  const [contract, setContract] = useState(null)
  const [configStages, setConfigStages] = useState({ 0: null, 1: null, 2: null })

  useEffect(() => {
    getConfigStage()
  }, [])

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
    console.log('useContract getWeb3 -->', new Web3(provider))
    return new Web3(provider)
  }

  // gets config from contract (check factoria dev docs)
  // TODO get other things from contract here if needed
  const getConfigStage = useCallback(async () => {
    // if (!contract) return

    // setLoading(() => true)

    try {
      // get config from contract
      const myWeb3 = getWeb3()
      const calls = stages_id.map((id) => {
        return {
          abi: GENESIS_INO_ABI,
          address: config.genesisInocontractaddress,
          name: 'stages',
          params: [id]
        }
      })
      issue_id.forEach((id) => {
        calls.push(
          {
            abi: GENESIS_INO_ABI,
            address: config.genesisInocontractaddress,
            name: 'nIssueJoined',
            params: [id]
          },
          {
            abi: GENESIS_INO_ABI,
            address: config.genesisInocontractaddress,
            name: 'issuesQuanity',
            params: [id]
          }
        )
      })
      calls.push(
        {
          abi: GENESIS_INO_ABI,
          address: config.genesisInocontractaddress,
          name: 'currentStage',
          params: []
        },
        {
          abi: GENESIS_INO_ABI,
          address: config.genesisInocontractaddress,
          name: 'nTotalJoined',
          params: []
        },
        {
          abi: GENESIS_INO_ABI,
          address: config.genesisInocontractaddress,
          name: 'paused',
          params: []
        }
      )
      const results = await multicall(myWeb3, calls, {})
      const dataINO = results.toString().split(',')
      const stages = [
        {
          stageId: 1,
          amount: dataINO[0],
          maxBuy: parseInt(dataINO[1]),
          startTime: parseInt(dataINO[2]),
          endTime: parseInt(dataINO[3]),
          isWhitelist: dataINO[4] === 'true',
          issueJoined: parseInt(dataINO[25]),
          issueQuantity: parseInt(dataINO[26])
        },
        {
          stageId: 2,
          amount: dataINO[5],
          maxBuy: parseInt(dataINO[6]),
          startTime: parseInt(dataINO[7]),
          endTime: parseInt(dataINO[8]),
          isWhitelist: dataINO[9] === 'true',
          issueJoined: parseInt(dataINO[25]),
          issueQuantity: parseInt(dataINO[26])
        },
        {
          stageId: 3,
          amount: dataINO[10],
          maxBuy: parseInt(dataINO[11]),
          startTime: parseInt(dataINO[12]),
          endTime: parseInt(dataINO[13]),
          isWhitelist: dataINO[14] === 'true',
          issueJoined: parseInt(dataINO[27]),
          issueQuantity: parseInt(dataINO[28])
        },
        {
          stageId: 4,
          amount: dataINO[15],
          maxBuy: parseInt(dataINO[16]),
          startTime: parseInt(dataINO[17]),
          endTime: parseInt(dataINO[18]),
          isWhitelist: dataINO[19] === 'true',
          issueJoined: parseInt(dataINO[27]),
          issueQuantity: parseInt(dataINO[28])
        },
        {
          stageId: 5,
          amount: dataINO[20],
          maxBuy: parseInt(dataINO[21]),
          startTime: parseInt(dataINO[22]),
          endTime: parseInt(dataINO[23]),
          isWhitelist: dataINO[24] === 'true',
          issueJoined: parseInt(dataINO[29]),
          issueQuantity: parseInt(dataINO[30])
        }
      ]
      const totalBoxSale = parseInt(dataINO[26]) + parseInt(dataINO[28]) + parseInt(dataINO[30])

      // hardcode
      // stages[0].issueJoined = '--'
      // End

      const data = {
        stages,
        0: [stages[0], stages[1]], // issue 1
        1: [stages[2], stages[3]], // issue 2
        2: [stages[4]], // issue 3
        currentStage: stages.find(i => i.stageId === parseInt(dataINO[31])),
        totalJoined: parseInt(dataINO[32]),
        totalBoxSale,
        paused: dataINO[33] === 'true'
      }
      // hardcode
      //  data.totalJoined = '--'
      // End
      setConfigStages(data)
      return
      // return stages_id[0]
    } catch (e) {
      // if there's an error, alert user
      console.error(e)
      toast('Something went wrong...', {
        type: 'error',
        message: 'We couldn\'t connect to the contract :('
      })
    }

    // setLoading(() => false)
  }, [contract, setLoading])

  const stageWhiteList = async (buyer) => {
    setLoading(() => true)
    try {
      const myWeb3 = getWeb3()
      const calls = []
      stages_id.forEach(id => {
        calls.push({
          abi: GENESIS_INO_ABI,
          address: config.genesisInocontractaddress,
          name: 'stageWhiteList',
          params: [id, buyer]
        },
        {
          abi: GENESIS_INO_ABI,
          address: config.genesisInocontractaddress,
          name: 'stageBought',
          params: [id, buyer]
        })
      })
      calls.push({
        abi: GENESIS_INO_ABI,
        address: config.genesisInocontractaddress,
        name: 'checkStage',
        params: [buyer]
      })
      let results = await multicall(myWeb3, calls, {})
      results = results.toString().split(',')
      setLoading(() => false)
      return {
        checkStage: results[10],
        isWLs: [0, 2, 4, 6, 8].map(i => results[i] === 'true'),
        boughts: [1, 3, 5, 7, 9].map(i => parseInt(results[i]))
      }
    } catch (e) {
      console.error(e)
      throw new Error(e.code)
    } finally {
      setLoading(() => false)
    }
  }

  const isJoinable = async (buyer, quantity) => {
    try {
      const myWeb3 = getWeb3()
      const myContract = new myWeb3.eth.Contract(GENESIS_INO_ABI, config.genesisInocontractaddress)
      const res = await myContract.methods.isJoinable(buyer, quantity).call()
      return res
    } catch (error) {
      console.error('isJoinable', error)
      return false
    }
  }

  const checkStage = async (buyer) => {
    try {
      const isAddress = Web3.utils.isAddress(buyer)
      if (isAddress !== true) {
        throw new Error('Invalid address')
      }
      const myWeb3 = getWeb3()
      const myContract = new myWeb3.eth.Contract(GENESIS_INO_ABI, config.genesisInocontractaddress)
      const res = await myContract.methods.checkStage(buyer).call()
      return res
    } catch (error) {
      console.error('checkStage', error)
      throw new Error(error?.message)
    }
  }

  const estimateGas = async (myContract, action, params, overwrite) => {
    const gas = await myContract.methods[action](...params).estimateGas(
      overwrite
    )
    return new Bignumber(gas).times(1.2).toFixed(0)
  }

  const sendRawTx = async (abi, addressContract, action, params, overwrite) => {
    const myWeb3 = getWeb3()
    const myContract = new myWeb3.eth.Contract(abi, addressContract)
    // const gas = await estimateGas(myContract, action, params, overwrite)
    const rs = myContract.methods[action](...params).send(overwrite)
    return rs
  }

  const joinINO = async (account, data) => {
    setLoading(() => true)
    try {
      const { quantity, amount } = data
      const overwrite = { from: account, value: amount }
      const res = await sendRawTx(
        GENESIS_INO_ABI,
        config.genesisInocontractaddress,
        'joinINO',
        [quantity],
        overwrite
      )
      return res
    } catch (e) {
      console.error(e)
      throw new Error(e?.message)
    } finally {
      setLoading(() => false)
    }
  }

  // TODO set return for anything we add later
  return useMemo(() => {
    return { configStages, getConfigStage, stageWhiteList, joinINO, checkStage }
  }, [configStages])
}

export default useContract
