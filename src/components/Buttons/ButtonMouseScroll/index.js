import React from 'react'
import Mouse from '@/static/svg/mouse.svg'

const index = props => {
  return (
    <>
      {props.type === 'desktop' && (
        <div className="mouse-scroll">
          <img src={Mouse} alt="mouse"/>
          <div className="mouse-scroll__text">scroll</div>
        </div>
      )}

      {props.type === 'mobile' && (
        <div className="mobile-scroll__mouse">
          <img src={Mouse} alt="mouse"/>
        </div>
      )}
    </>

  )
}

index.defaultProps = {
  type: 'desktop'
}

export default index
