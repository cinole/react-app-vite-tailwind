const env = import.meta.env
const configENV = {
  production: {
    networkName: 'Arbitrum',
    scanUrl: 'https://arbiscan.io',
    rpcUrl: env.REACT_APP_RPC_URL || 'https://arb1.arbitrum.io/rpc'
  },
  development: {
    networkName: parseInt(env.REACT_APP_CHAIN_ID) === 5 ? 'goerli Test Network' : 'BSC testnet',
    scanUrl: parseInt(env.REACT_APP_CHAIN_ID) === 5 ? 'https://goerli.etherscan.io' : 'https://testnet.bscscan.com',
    rpcUrl: env.REACT_APP_RPC_URL || 'https://goerli.infura.io/v3/a347a14994874cc6b4849256440d0357' // || 'https://goerli.infura.io/v3/3d1ad44da9c34f7b9c42f137f68b0d4d'
  },
  uat: {
    networkName: 'BSC testnet',
    scanUrl: 'https://testnet.bscscan.com',
    rpcUrl: env.REACT_APP_RPC_URL || 'https://data-seed-prebsc-1-s1.binance.org:8545'
  }
}

const common = {
  chainId: parseInt(env.REACT_APP_CHAIN_ID) || 42161,
  refreshInterval: 10000,
  genesisInocontractaddress: env.REACT_APP_GENESIS_INO_CONTRACT_ADDRESS || '0x6852c61eBB3056915c93A8347599F452691A9140',
  multicall: env.REACT_APP_MULTICALL_CONTRACT_ADDRESS || '0x091bA9292a56b9FdFDc4268DCB09309066f3f20a',
  bizContractAddress: env.REACT_APP_BIZ_ADDRESS || '0xd0736BFB784f2E41D15435d4f7DC22a1f0e0DCc2'
}

const configurations = configENV[env.REACT_APP_ENV] || configENV.production

export default { ...configurations, ...common }
