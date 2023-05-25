import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate as useHistory } from 'react-router'
import { matchPath, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { updateConnectInfo, toggleModalConnect } from '@/store/actions/connect'
import { handleChangeAccount, resetState } from '@/util/auth'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { connectSelector } from '@/store/selectors/connect'
import { threeDots } from '@/util/formatData'
// import { LINK_URL } from '@/constants'

import { Box, Slide, AppBar, Toolbar } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
// import WalletBtn from '@/static/svg/mint-wallet-btn.svg'
import useScrollTrigger from '@mui/material/useScrollTrigger'
// import Dropdown from '@/components/Dropdown'

const index = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const headerRef = useRef(null)
  const { pathname } = useLocation()
  const connectInfo = useSelector(connectSelector)
  const [copiedText, copy] = useCopyToClipboard()
  const [coins, setOptionsCoins] = useState(['USD', 'USDT'])

  const handleClickConnect = () => {
    if (!connectInfo.address) dispatch(toggleModalConnect(true))
    else resetState()
  }

  const container =
    window !== undefined ? () => window.document.body : undefined

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
    if (!connectInfo.address) {
      // console.log(connectInfo.address)
      if (window.ethereum?.selectedAddress) {
        dispatch(
          updateConnectInfo({
            address: window.ethereum?.selectedAddress,
            provider: window.ethereum
          })
        )
      }
    }
  }, [window.ethereum?.selectedAddress])

  return (
    <div ref={headerRef} className="header">
      <HideOnScroll {...props}>
        <Box>
          <AppBar component="nav" className="">
            <Toolbar className="wp-header d-flex justify-content-between py-2 py-sm-0">
              <Box sx={{ display: { sm: 'flex' } }} className="wp-header__logo">
                <img className="pointer" src="/static/images/logo.png" alt="BioWebsite" onClick={() => history('/')}/>
              </Box>
              <Box className="d-flex justify-content-end align-items-center gap-4">
                {/* <Box className="wp-lang fs-12 text-sub">English</Box>
                <Dropdown options={coins} className="dropdown-coin align-self-stretch fs-12 text-sub me-4 ps-3"/> */}
                {!connectInfo.address ? (
                  <Box
                    className="btn-action pointer fs-12 text-sub"
                    onClick={() => handleClickConnect()}
                  >
                    Log In
                    <LoginIcon className="mint-icon ms-1" />
                  </Box>
                ) : (
                  <>
                    <Box className="wp-account d-flex align-items-center pe-3">
                      <img src="/static/images/logo.png" alt="" />
                      <Box className="ms-2">
                        {/* <Link to="/profile"> */}
                        <p
                          className="name fs-14 fw-bold mb-1 pointer"
                          onClick={() => history('/profile')}
                        >
                          Username001
                        </p>
                        {/* </Link> */}
                        <p
                          className="position-relative fs-12 text-sub mb-0 pointer"
                          style={{ lineHeight: '14px' }}
                          onClick={() => copy(connectInfo.address)}
                        >
                          {threeDots(connectInfo.address)}
                          <ContentCopyIcon
                            sx={{ fontSize: '13px' }}
                            className="ms-1"
                          />
                          {copiedText && (
                            <span className="wp-tooltip px-2 py-1 mt-2 text-orange">
                              Copied
                            </span>
                          )}
                        </p>
                      </Box>
                    </Box>
                    <Box
                      className="btn-action fs-12 text-sub pointer"
                      onClick={() => resetState()}
                    >
                      Log Out
                      <LogoutIcon className="ms-1" />
                    </Box>
                  </>
                )}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </HideOnScroll>
    </div>
  )
}

export default index
