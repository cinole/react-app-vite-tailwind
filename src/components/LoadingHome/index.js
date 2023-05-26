import React from 'react'
import { Box } from '@mui/material'

const Loading = (props) => {
  const classes = ['preloader', !props.loading ? 'hidden' : ''].join(' ')

  return (
    <Box className={`d-flex flex-column justify-content-center align-items-center ${classes}`}>
      <img className="mt-5" src="/static/images/loading-center.png" />
      <Box className="process-bar-back mx-auto mt-5">
        <Box
          className="process-bar-front"
        />
      </Box>
      <img className="mt-5" src="/static/images/loading-text.png" />
    </Box>
  )
}

export default Loading
