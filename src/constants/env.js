const ENV = import.meta.env

export const env = {
  app: {
    apiUrl:
      ENV.REACT_APP_BASE_URL ||
      'https://dev-marketplace-api.biowebsite.io',
    authUrl: ENV.VUE_APP_URL_GAME || 'https://dev-metadata.biowebsite.io',
    metadataBoxUrl:
      ENV.REACT_APP_URL_METADATA_BOX ||
      'https://dev-market-metadata.biowebsite.io',
    metadataUrl:
      ENV.REACT_APP_URL_METADATA || 'https://dev-metadata.biowebsite.io',
    locale: ENV.REACT_APP_I18N_LOCALE || 'en',
    fallbackLocale: ENV.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    suffixImage: ENV.VUE_APP_SUFFIX_VALUE_IMAGE || '1',

    token: {
      biowebsiteAddress:
        ENV.VUE_APP_BIO_TOKEN_ADDRESS ||
        '0xD0338F24C2f976F5f979C81C27853a8B8106FE78',
      biowebsiteDecimals: ENV.VUE_APP_BIO_TOKEN_DECIMAL || 18,
      busdAddress:
        ENV.VUE_APP_BUSD_ADDRESS ||
        '0xe7fDae84ACaba2A5Ba817B6E6D8A2d415DBFEdbe',
      lpAddress:
        ENV.VUE_APP_LP_ADDRESS ||
        '0xD6e10d1a3dc19e4b3EC42EF91944435aeD4e2E45'
    },
    contractAddress: {
      multicallAddress:
        ENV.REACT_APP_MULTICALL_CONTRACT_ADDRESS ||
        '0xA2ca9D03a7f0fCa6Ee249Be34f29604903d5B5C9',
      maketplace:
        ENV.VUE_APP_MAKETPLACE_ADDRESS ||
        '0x25F27760D853077B668969C4B2386d55FA6d9fA6',
      biz:
        ENV.REACT_APP_BIZ_ADDRESS ||
        '0xd0736BFB784f2E41D15435d4f7DC22a1f0e0DCc2',
      mysteryBox:
        ENV.VUE_APP_MYSTERY_BOX_ADDRESS ||
        '0xBBaC79a1dCA78b5B5D4f63C1db36c9eb04dDe258',
      store:
        ENV.VUE_APP_STORE ||
        '0xA694642006E80e91b0E59C026e10A3fd5EAC2f1c',
      staking: ENV.REACT_APP_STAKING_CONTRACT_ADDRESS ||
      '0x11c5243e42a8fc2fc49c0d909fb3ec82f3c715cf'
    }
    // rpcMetamask: {
    //   infuraKey:
    //     ENV.VUE_APP_INFURAK_KEY || '3d1ad44da9c34f7b9c42f137f68b0d4d',
    //   chainId: ENV.VUE_APP_CHAINID
    //     ? Number(ENV.VUE_APP_CHAINID)
    //     : 5,
    // },
  }
}
