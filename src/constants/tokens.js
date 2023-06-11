import config from '@/config'
const CHAIN_ID = config.chainId
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

console.log('----------CHAIN_ID', CHAIN_ID)
const list_token = {
  42: [
    {
      name: 'ETH',
      symbol: 'ETH',
      address: ZERO_ADDRESS,
      decimals: 18,
      isNative: true,
      logoURI: '/static/images/coin/eth.svg'
    }
  ],
  56: [
    {
      name: 'BNB',
      symbol: 'BNB',
      address: ZERO_ADDRESS,
      decimals: 18,
      isNative: true,
      logoURI: '/static/images/coin/bnb.svg'
    }
  ],
  5: [
    {
      name: 'ETH',
      symbol: 'ETH',
      address: ZERO_ADDRESS,
      decimals: 18,
      isNative: true,
      logoURI: '/static/images/coin/eth.svg'
    }
  ],
  1: [
    {
      name: 'ETH',
      symbol: 'ETH',
      address: ZERO_ADDRESS,
      decimals: 18,
      isNative: true,
      logoURI: '/static/images/coin/eth.svg'
    }
  ]
}

export default list_token[CHAIN_ID]
