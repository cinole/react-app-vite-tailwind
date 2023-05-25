// import IconHome from '@/static/icons/icon-home.svg'
// import IconExplorer from '@/static/icons/icon-rocket.svg'
// import IconMarket from '@/static/icons/icon-store.svg'
// import IconWallet from '@/static/icons/icon-wallet.svg'
// import IconDex from '@/static/icons/icon-meteor.svg'
// import IconWhitepaper from '@/static/icons/icon-airplane.svg'
import { LINK_URL } from '@/constants'

const menus = [
  {
    label: 'Introduction',
    key: 'introduction',
    // path: '/'
    // icon: IconHome,
    subMenuId: 'introductionId',
    subMenu: [
      {
        label: 'Introduction',
        key: 'sub-introduction',
        path: '/#st2'
      },
      {
        label: 'Genesis NFT',
        key: 'sub-genesis',
        path: '/#st3'
      },
      {
        label: 'Game',
        key: 'sub-game',
        path: '/#st4'
      },
      {
        label: 'Utopia',
        key: 'sub-utopia',
        path: '/#st5'
      },
      {
        label: 'Tokens',
        key: 'sub-tokens',
        path: '/#st6'
      },
      {
        label: 'Roadmap',
        key: 'sub-roadmap',
        path: '/#st7'
      },
      {
        label: 'Team & Advisors',
        key: 'sub-team_advisor',
        path: '/#st8'
      },
      {
        label: 'Partners',
        key: 'sub-partner',
        path: '/#st9'
      }
    ]
  },
  {
    label: '3D Genesis',
    key: '3D_genesis',
    path: '/genesis'
  },
  { label: 'Staking', key: 'staking', extLink: '' },
  {
    label: 'Marketplace',
    key: 'marketplace',
    extLink: LINK_URL.marketplace
  },
  {
    label: 'Reservation',
    key: 'reservation',
    path: '/reservation'
  }
]

export default menus
