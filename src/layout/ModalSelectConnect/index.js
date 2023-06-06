import { toast } from 'react-toastify'
import { SCModalConnect } from './styled'
import { useWeb3Context } from '@/context/Web3Context'
import { useCommonContext } from '@/context/CommonContext'

import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import Backdrop from '@mui/material/Backdrop'
import Metamask from '@/assets/images/metamask.png'
import Walletconnect from '@/assets/images/walletconnect.png'

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
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModalConnect}
      // onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModalConnect}>
        <SCModalConnect className="modal-select-connect relative">
          <div className="modal-body-bg" />
          <div className="modal-content px-8">
            <div
              onClick={() => setOpenModalConnect(false)}
              className="btn-close absolute right-0 top-0 p-3"
            >
              {/* <img src={IconClose} alt="close" /> */}
            </div>
            <div className="modal-content__btn-group flex flex-col">
              {/* {!detectMobile.isMobile() && ( */}
              <button
                disabled={loading}
                onClick={() => handleConnect()}
                className="px-6 py-2 mb-4"
              >
                <img className="mr-4 inline" src={Metamask} alt="metamask" />
                Login with Metamask
              </button>
              {/* )} */}
              <button
                disabled={loading}
                onClick={() => handleConnect('walletconnect')}
                className="px-6 py-2"
              >
                <img className="mr-4 inline" src={Walletconnect} alt="metamask" />
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

export default Index
