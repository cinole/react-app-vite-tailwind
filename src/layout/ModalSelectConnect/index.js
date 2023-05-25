import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import useMobileDetect from 'use-mobile-detect-hook'
import moment from 'moment'
import Web3 from 'web3'

import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Backdrop from '@mui/material/Backdrop'
import Metamask from '@/static/images/metamask.png'
import web3Modal from '@/util/web3Modal'
import Web3Context from '@/context/Web3Context'
import Walletconnect from '@/static/images/walletconnect.png'
import usePromptNetwork from '@/hooks/useNetworkPrompt'
import { login } from '@/store/actions/auth'
import { SCModalConnect } from './styled'
import { modalConnectSelector } from '@/store/selectors/connect'
import { loginToBackendWithConnectedAccount } from '@/util/nftData'
import { updateConnectInfo, toggleModalConnect } from '@/store/actions/connect'

const index = (props) => {
  // const modalRef = useRef()
  const detectMobile = useMobileDetect()
  const isOpenModal = useSelector(modalConnectSelector)
  const { loading, setLoading } = useContext(Web3Context)
  const { checkNetwork, connectToNetwork } = usePromptNetwork()
  const dispatch = useDispatch()

  const handleConnect = async (connectorId = 'injected') => {
    try {
      setLoading(() => true)

      if (!checkNetwork()) await connectToNetwork()

      // #region metamask mobile
      if (connectorId === 'injected') {
        const userAgent = window.navigator.userAgent.toLowerCase()
        const safari = /safari/.test(userAgent)
        const ios = /iphone|ipod|ipad/.test(userAgent)
        const metamaskUrl = `https://metamask.app.link/dapp/${window.location.host}/mint`
        if (ios) {
          if (safari) {
            // browser
            window.open(metamaskUrl, '_self')
          }
        } else if (detectMobile.isMobile()) {
          if (!userAgent.includes('wv')) {
            window.open(metamaskUrl, '_self')
          }
        }
      }
      // #endregion

      if (window.ethereum && window.ethereum.isSafePal) {
        return window.ethereum
      }

      const provider = await web3Modal.connectTo(connectorId)
      const web3 = new Web3(provider)
      const address = await web3.eth.getAccounts()
      // const connectedAccountInfo = await loginToBackendWithConnectedAccount({
      //   address: address[0],
      //   web3,
      //   provider,
      //   connectorId
      // })
      // if (connectedAccountInfo) {
      //   const dataAuth = {
      //     ...connectedAccountInfo,
      //     expired: moment().unix() + Number(connectedAccountInfo.expires_in)
      //   }
      //   dispatch(login({ isAuthenticated: true, ...dataAuth }))
      //   dispatch(updateConnectInfo({ address: address[0], provider }))
      // }
      dispatch(updateConnectInfo({ address: address[0], provider }))
    } catch (error) {
      toast(`Could not get a wallet connection ${error}`, {
        type: 'error',
        message: error
      })
      console.log('Could not get a wallet connection', error)
    } finally {
      setLoading(() => false)
      dispatch(toggleModalConnect(false))
    }
  }
  // useEffect(() => {
  //   dispatch(setLoadingGlobal({ status: loading }))
  // }, [loading])

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpenModal}
      // onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={isOpenModal}>
        <SCModalConnect className="modal-select-connect position-relative">
          <div className="modal-body-bg" />
          {/* <img
            className="modal-title-bg-logo"
            src="/static/images/bg-logo.png"
            alt="Logo BioWebsite"
          />
          <img
            className="modal-title-logo-full"
            src="/static/images/logo-full.png"
            alt="Logo BioWebsite"
          /> */}
          <div className="modal-content px-5">
            <div
              onClick={() => dispatch(toggleModalConnect(false))}
              className="btn-close position-absolute end-0 top-0 p-3"
            >
              {/* <img src={IconClose} alt="close" /> */}
            </div>
            <div className="modal-content__btn-group d-flex flex-column">
              {/* {!detectMobile.isMobile() && ( */}
              <button
                onClick={() => handleConnect()}
                className="px-4 py-2 mb-3"
              >
                <img className="me-3" src={Metamask} alt="metamask" />
                Login with Metamask
              </button>
              {/* )} */}
              <button
                onClick={() => handleConnect('walletconnect')}
                className="px-4 py-2"
              >
                <img className="me-3" src={Walletconnect} alt="metamask" />
                Login Walletconnect
              </button>
            </div>
          </div>
        </SCModalConnect>
      </Fade>
      {/* <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => 99 }}
        open={loading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
    </Modal>
  )
}

export default index
