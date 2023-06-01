import GENESIS_INO_ABI from './abi/genesis-ino.json'
import ERC20_ABI from './abi/erc20.json'
import BIZ_ABI from './abi/biz.json'

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
  home: 'https://www.hellven.io/',
  docs: 'https://docs.hellven.io/',
  nft: '',
  tokenomics: '',
  staking: '',
  marketplace: process.env.REACT_APP_MARKETPLACE_URL,
  inventory: process.env.REACT_APP_MARKETPLACE_URL,
  whitepaper: 'https://docs.hellven.io/',
  facebook: '',
  twitter: 'https://twitter.com/HellvenGate',
  discord: 'https://discord.gg/hellvensgate',
  medium: 'https://medium.com/@hellven_gate',
  youtube: '',
  telegram: 'https://t.me/hellvengateglobal'
}

const AGE_RANGE = [15, 70]

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

const TYPE_NFT = {
  hero: 'CHARACTER',
  box: 'CHARACTER_BOX',
  genesis: 'GENESIS',
  genesisbox: 'GENESIS_BOX',
  land: 'LAND'
}

const LIST_RARITY = [
  { value: 's', text: 'S', class: 'common', color: 'grey' },
  { value: 'r', text: 'R', class: 'rare', color: 'blue' },
  { value: 'sr', text: 'SR', class: 'epic', color: 'red' },
  { value: 'ssr', text: 'SSR', class: 'legendary', color: 'yellow' }
]

const FILTER_RARITY = [
  { value: 'common', text: 'Common', class: 'common', color: 'grey', rank: 1 },
  { value: 'rare', text: 'Rare', class: 'rare', color: 'blue', rank: 2 },
  { value: 'epic', text: 'Epic', class: 'epic', color: 'red', rank: 3 },
  {
    value: 'legendary',
    text: 'Legendary',
    class: 'legendary',
    color: 'yellow',
    rank: 4
  }
]

const FILTER_CLASS = [
  { text: 'Hunter', value: 'hunter', img: 'class_19' },
  { text: 'Knight', value: 'knight', img: 'class_17' },
  { text: 'Mage', value: 'mage', img: 'class_18' },
  { text: 'Monk', value: 'monk', img: 'class_16' },
  { text: 'Priest', value: 'priest', img: 'class_22' },
  { text: 'Rouge', value: 'rouge', img: 'class_20' },
  { text: 'Pirate', value: 'pirate', img: 'class_21' },
  { text: 'Druid', value: 'druid', img: 'class_25' },
  { text: 'Engineer', value: 'engineer', img: 'class_23' },
  { text: 'Shaman', value: 'shaman', img: 'class_24' }
]

const FILTER_RACE = [
  { text: 'Human', value: 'human', img: 'race_14' },
  { text: 'Elf', value: 'elf', img: 'race_31' },
  { text: 'Devil', value: 'devil', img: 'race_29' },
  { text: 'Angel', value: 'angel', img: 'race_26' },
  { text: 'Orc', value: 'orc', img: 'race_30' },
  { text: 'Undead', value: 'undead', img: 'race_28' },
  { text: 'Steamborg', value: 'steamborg', img: 'race_27' }
]

const FILTER_SIN = [
  { text: 'Lust', value: 'lust', img: 'sin_40' },
  { text: 'Gluttony', value: 'gluttony', img: 'sin_38' },
  { text: 'Greed', value: 'greed', img: 'sin_41' },
  { text: 'Sloth', value: 'sloth', img: 'sin_43' },
  { text: 'Wrath', value: 'wrath', img: 'sin_42' },
  { text: 'Pride', value: 'pride', img: 'sin_13' },
  { text: 'Envy', value: 'envy', img: 'sin_39' }
]

const FILTER_ELEMENTAL = [
  { text: 'Water', value: 'water', img: 'elemental_32' },
  { text: 'Fire', value: 'fire', img: 'elemental_15' },
  { text: 'Earth', value: 'earth', img: 'elemental_33' },
  { text: 'Plant', value: 'plant', img: 'elemental_34' },
  { text: 'Metal', value: 'metal', img: 'elemental_35' },
  { text: 'Dark', value: 'dark', img: 'elemental_36' },
  { text: 'Light', value: 'light', img: 'elemental_37' }
]

const FILTER_RARITY_BOX = [
  { value: 's', text: 'S', class: 'common', color: 'grey' },
  { value: 'r', text: 'R', class: 'rare', color: 'blue' },
  { value: 'sr', text: 'SR', class: 'epic', color: 'red' },
  { value: 'ssr', text: 'SSR', class: 'legendary', color: 'yellow' }
]

const FILTER_RACE_TOTEM = [
  { text: 'Human', value: 'human', img: 'race_14' },
  { text: 'Elf', value: 'elf', img: 'race_31' },
  { text: 'Devil', value: 'devil', img: 'race_29' },
  { text: 'Angel', value: 'angel', img: 'race_26' },
  { text: 'Orc', value: 'orc', img: 'race_30' },
  { text: 'Undead', value: 'undead', img: 'race_28' },
  { text: 'Steamborg', value: 'steamborg', img: 'race_27' }
]

const FILTER_ELEMENTAL_TOTEM = [
  { text: 'Water', value: 'water', img: 'elemental_32' },
  { text: 'Fire', value: 'fire', img: 'elemental_15' },
  { text: 'Earth', value: 'earth', img: 'elemental_33' },
  { text: 'Plant', value: 'plant', img: 'elemental_34' },
  { text: 'Metal', value: 'metal', img: 'elemental_35' },
  { text: 'Dark', value: 'dark', img: 'elemental_36' },
  { text: 'Light', value: 'light', img: 'elemental_37' }
]

const RARITY_RATES = {
  box: {
    30: {
      common: 1,
      rare: 2,
      epic: 3,
      legendary: 4
    },
    60: {
      common: 2,
      rare: 3,
      epic: 4,
      legendary: 5
    }
  },
  money: {
    30: {
      common: 8,
      rare: 10,
      epic: 14,
      legendary: 20
    },
    60: {
      common: 8,
      rare: 10,
      epic: 14,
      legendary: 20
    },
    90: {
      last: 90,
      common: 8,
      rare: 10,
      epic: 14,
      legendary: 20
    },
    180: {
      common: 8,
      rare: 10,
      epic: 14,
      legendary: 20
    }
  }
}

const LIST_PERIOD = {
  box: [
    // { value: 30, locked: false, second: 3600 },
    // { value: 60, locked: false, second: 7200 }
    { value: 30, locked: false, second: 300 },
    { value: 60, locked: false, second: 600 }
  ],
  money: [
    { value: 30, locked: true, second: 3600 },
    { value: 60, locked: false, second: 7200 },
    { value: 90, locked: false, second: 10800 },
    { value: 180, locked: false, second: 21600 }
  ]
}

export {
  GENESIS_INO_ABI,
  ERC20_ABI,
  COINS_MINT,
  TYPE_NFT,
  AGE_RANGE,
  FILTER_SIN,
  LIST_PERIOD,
  LIST_RARITY,
  FILTER_RACE,
  FILTER_CLASS,
  RARITY_RATES,
  FILTER_RARITY,
  FILTER_RARITY_BOX,
  FILTER_RACE_TOTEM,
  FILTER_ELEMENTAL,
  FILTER_ELEMENTAL_TOTEM,
  BIZ_ABI
}
