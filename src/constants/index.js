import ERC721_ABI from './abi/erc721.json'
import ERC20_ABI from './abi/erc20.json'
const env = import.meta.env

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
}
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const CONNECT_INFO = 'CONNECT_INFO'
export const OPEN_MODAL_CONNECT = 'OPEN_MODAL_CONNECT'
export const LINK_URL = {
  // market: window.location.hostname === 'dev-scan.randan.io' ? 'https://dev-scan.randan.io/' : '',
  home: 'https://www.biowebsite.io/',
  docs: 'https://docs.biowebsite.io/',
  nft: '',
  tokenomics: '',
  staking: '',
  marketplace: 'https://market.biowebsite.io/',
  inventory: env.REACT_APP_MARKETPLACE_URL,
  whitepaper: 'https://docs.biowebsite.io/',
  facebook: '',
  twitter: 'https://twitter.com/BioWebsiteGate',
  discord: 'https://discord.gg/biowebsitesgate',
  medium: 'https://medium.com/@biowebsite_gate',
  youtube: '',
  telegram: 'https://t.me/biowebsitegateglobal'
}

const COINS_MINT = {
  56: {
    symbol: 'BNB',
    decimals: 18,
    icon: '/static/icons/eth.svg'
  },
  5: {
    symbol: 'ETH',
    decimals: 18,
    icon: '/static/icons/eth.svg'
  },
  97: {
    symbol: 'ETH',
    decimals: 18,
    icon: '/static/icons/eth.svg'
  },
  42161: {
    symbol: 'ETH',
    decimals: 18,
    icon: '/static/icons/eth.svg'
  }
}

export {
  ERC721_ABI,
  ERC20_ABI,
  COINS_MINT
}
