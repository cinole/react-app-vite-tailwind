import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom';
// import Loading from '@/components/LoadingHome'
import Header from '@/layout/Header'
import Loading from '@/components/LoadingLayer'
import ModalSelectConnect from '@/layout/ModalSelectConnect'

const index = (props) => {
  const loading = true

  return (
    <div className="main-layout">
      <ModalSelectConnect />

      <Loading loading={loading} />
      <ToastContainer
        className="snackbar-container"
        toastClassName="snackbar-item"
        bodyClassName="snackbar-body"
        autoClose={5000}
        // hideProgressBar
        draggable={false}
        pauseOnHover={false}
        closeOnClick={false}
        pauseOnFocusLoss={false}
        newestOnTop
      />
      <Header/>
      <div className="wp-main"><Outlet /></div>
      {/* <Footer /> */}
    </div>
  )
}

export default index
