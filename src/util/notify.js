import React from 'react'
import { toast } from 'react-toastify'
import Snackbar from '@/components/Snackbar'

const notify = (props) => {
  toast.dismiss() // Remove all current toasts !

  toast[props.type](
    <Snackbar
      type={props.type}
      message={props.message}
    />, {
      className: `snackbar-item ${props.type}` // style in app.scss selector
    })
}

export default notify
