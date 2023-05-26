import React from 'react'
import { Typography } from '@mui/material'
import IconSuccess from '@/static/icons/i-message-success.svg'
import IconError from '@/static/icons/i-message-error.svg'
import IconWarning from '@/static/icons/i-message-warning.svg'

const Snackbar = (props) => {
  const SNACKBAR_ICON = {
    success: IconSuccess,
    warning: IconError,
    error: IconWarning
  }

  const SNACKBAR_TITLE = {
    error: 'error',
    success: 'success',
    warning: 'warning'
  }

  return (
    <>
      <img
        src={SNACKBAR_ICON[props.type]}
        alt={props.type}
      />
      <div className="snackbar__content">
        <Typography
          variant="body1"
          className="snackbar__type"
        >{SNACKBAR_TITLE[props.type]}
        </Typography>
        <Typography
          variant="body2"
          className="snackbar__message"
        >
          {props.message || 'There was some technical issues while processing your request'}
        </Typography>
      </div>
    </>
  )
}

export default Snackbar
