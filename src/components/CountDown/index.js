import React, { useEffect } from 'react'
import { Box } from '@mui/material'

import { useCountdown } from '@/hooks/useCountdown'

const index = ({ time, handleResetTime }) => {
  const { days, hours, minutes, seconds, timeLeft } = useCountdown(time * 1000)

  // console.log('time', time)
  useEffect(() => {
    if (timeLeft === 0) {
      handleResetTime && handleResetTime()
    }
  }, [timeLeft])

  return (
    <Box className="text-time uppercase">
      {days > 0 ? days + 'd :' : ''} {hours}h : {minutes}m : {seconds}s
    </Box>
  )
}

export default index
