import { useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AppBar, Slide, Toolbar } from '@mui/material'


import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { useCommonContext } from '@/context/CommonContext'
import { useWeb3Context } from '@/context/Web3Context'
import { threeDots } from '@/util/formatData'
// import { useLocation } from 'react-router-dom'
// import { resetState } from '@/util/auth'

import useScrollTrigger from '@mui/material/useScrollTrigger'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Logo from '@/assets/images/logo.png'
// import WalletBtn from '@/static/svg/mint-wallet-btn.svg'
// import Dropdown from '@/components/Dropdown'

// const imageUrl = new URL(`./dir/${name}.png`, import.meta.url).href

const Index = () => {
  const navigate = useNavigate()
  const headerRef = useRef(null)
  // const { pathname } = useLocation()
  const { currentAccount } = useWeb3Context()
  const { setOpenModalConnect } = useCommonContext()


  const [copiedText, copy] = useCopyToClipboard()

  const handleClickConnect = () => {
    if (!currentAccount) setOpenModalConnect(true)
    // else resetState()
  }

  const HideOnScroll = (props) => {
    const { children, window } = props
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window || undefined
    })

    return (
      <Slide
        appear
        direction="down"
        in={!trigger}
        container={headerRef.current}
      >
        {children}
      </Slide>
    )
  }

  useEffect(() => {
    // if (!connectInfo.address) {
    //   // console.log(connectInfo.address)
    //   if (window.ethereum?.selectedAddress) {
    //     dispatch(
    //       updateConnectInfo({
    //         address: window.ethereum?.selectedAddress,
    //         provider: window.ethereum,
    //       })
    //     )
    //   }
    // }
  }, [window.ethereum?.selectedAddress])

  return (
    <div ref={headerRef} className="header">
      <HideOnScroll>
        <AppBar component="nav" className="">
          <Toolbar className="wp-header flex justify-between py-2 py-sm-0">
            <div className="wp-header__logo flex items-center">
              <img
                className="pointer"
                src={Logo}
                alt="BioWebsite"
                onClick={() => navigate('/')}
              />
            </div>
            <div className="flex justify-end items-center gap-6">
              {/* <div className="wp-lang fs-12 text-sub">English</div>
                <Dropdown options={coins} className="dropdown-coin align-self-stretch fs-12 text-sub me-6 pl-4"/> */}
              {!currentAccount ? (
                <div
                  className="btn-action pointer fs-12 text-sub"
                  onClick={() => handleClickConnect()}
                >
                  Log In
                  <LoginIcon className="mint-icon ml-1" />
                </div>
              ) : (
                <>
                  <div className="wp-account flex items-center pr-4">
                    <img src={'/images/logo.png'} alt="" />
                    <div className="ml-2">
                      <Link to="/profile">
                      <p
                        className="name fs-14 fw-bold mb-1 pointer"
                        onClick={() => navigate('/profile')}
                      >
                        Username001
                      </p>
                      </Link>
                      <p
                        className="relative fs-12 text-sub mb-0 pointer"
                        style={{ lineHeight: '14px' }}
                        onClick={() => copy(currentAccount)}
                      >
                        {threeDots(currentAccount)}
                        <ContentCopyIcon
                          sx={{ fontSize: '13px' }}
                          className="ml-1"
                        />
                        {copiedText && (
                          <span className="wp-tooltip px-2 py-1 mt-2 text-orange">
                            Copied
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div
                    className="btn-action fs-12 text-sub pointer"
                    // onClick={() => resetState()}
                  >
                    Log Out
                    <LogoutIcon className="ml-1" />
                  </div>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}

export default Index
