import React from 'react'
import { Box } from '@mui/material'

const Loading = (props) => {
  const classes = ['preloader', !props.loading ? 'hidden' : ''].join(' ')

  return (
    <Box className={`flex col justify-center items-center ${classes}`}>
      <img className="mt-8" src="/static/images/loading-center.png" />
      <Box className="process-bar-back mx-auto mt-8">
        <Box
          className="process-bar-front"
        />
      </Box>
      <img className="mt-8" src="/static/images/loading-text.png" />
    </Box>
  )
}

export default Loading
