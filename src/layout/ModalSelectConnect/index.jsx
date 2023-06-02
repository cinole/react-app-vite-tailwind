import { toast } from 'react-toastify'

import Modal from '@/components/Modal'
import Metamask from '@/static/images/metamask.png'
import Walletconnect from '@/static/images/walletconnect.png'
import { useWeb3Context } from '@/context/Web3Context'
import { useCommonContext } from '@/context/CommonContext'
// import { updateConnectInfo, toggleModalConnect } from '@/store/actions/connect'

const Index = () => {
  const { loading, setLoading, connectWallet } = useWeb3Context()
  const { openModalConnect, setOpenModalConnect } = useCommonContext()

  const handleConnect = async (connectorId = 'injected') => {
    try {
      // const web3 = new Web3(provider)
      // const address = await web3.eth.getAccounts()
      connectWallet(connectorId)
    } catch (error) {
      toast(`Could not get a wallet connection ${error}`, {
        type: 'error',
        message: error,
      })
      console.log('Could not get a wallet connection', error)
    } finally {
      setLoading(() => false)
      setOpenModalConnect(false)
    }
  }

  return (
    <Modal
      id="modal-connect"
      defaultOpen={openModalConnect}
    >
      <div className="modal-select-connect position-relative">
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
            onClick={() => setOpenModalConnect(false)}
            className="btn-close position-absolute end-0 top-0 p-3"
          >
            {/* <img src={IconClose} alt="close" /> */}
          </div>
          <div className="modal-content__btn-group d-flex flex-column">
            {/* {!detectMobile.isMobile() && ( */}
            <button disabled={loading} onClick={() => handleConnect()} className="px-4 py-2 mb-3">
              <img className="me-3" src={Metamask} alt="metamask" />
              Login with Metamask
            </button>
            {/* )} */}
            <button
              disabled={loading}
              onClick={() => handleConnect('walletconnect')}
              className="px-4 py-2"
            >
              <img className="me-3" src={Walletconnect} alt="metamask" />
              Login Walletconnect
            </button>
          </div>
        </div>
      </div>
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

export default Index
