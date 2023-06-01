import { useState, useRef, useEffect } from 'react'
import { useNavigate as useHistory } from 'react-router'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { updateConnectInfo, toggleModalConnect } from '@/store/actions/connect'
import { resetState } from '@/util/auth'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { connectSelector } from '@/store/selectors/connect'
import { threeDots } from '@/util/formatData'
// import { LINK_URL } from '@/constants'

import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
// import WalletBtn from '@/static/svg/mint-wallet-btn.svg'
import useScrollTrigger from '@mui/material/useScrollTrigger' 
// import Dropdown from '@/components/Dropdown'

const Index = (props) => {
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
        <div>
          <nav className="">
            <div className="wp-header d-flex justify-content-between py-2 py-sm-0">
              <div className="wp-header__logo flex">
                <img className="pointer" src="/static/images/logo.png" alt="BioWebsite" onClick={() => history('/')}/>
              </div>
              <div className="d-flex justify-content-end align-items-center gap-4">
                {/* <div className="wp-lang fs-12 text-sub">English</div>
                <Dropdown options={coins} className="dropdown-coin align-self-stretch fs-12 text-sub me-4 ps-3"/> */}
                {!connectInfo.address ? (
                  <div
                    className="btn-action pointer fs-12 text-sub"
                    onClick={() => handleClickConnect()}
                  >
                    Log In
                    <LoginIcon className="mint-icon ms-1" />
                    <span className="icon-[mdi-light--tabler:login]"></span>
                  </div>
                ) : (
                  <>
                    <div className="wp-account d-flex align-items-center pe-3">
                      <img src="/static/images/logo.png" alt="" />
                      <div className="ms-2">
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
                      </div>
                    </div>
                    <div
                      className="btn-action fs-12 text-sub pointer"
                      onClick={() => resetState()}
                    >
                      Log Out
                      <LogoutIcon className="ms-1" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
    </div>
  )
}

export default Index
