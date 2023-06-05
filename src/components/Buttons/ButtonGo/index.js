import React from 'react'
import ArrowRight from '@/static/svg/arrow-next.svg'

const index = props => {
  return (
    <>
      {props.type === 'desktop' && (
        <div className="btn-go">
          <div className="heading-6 btn-go__text">{props.title}</div>
          <img src={ArrowRight} alt="arrow-go"/>
        </div>
      )}

      {props.type === 'mobile' && (
        <div className="mobile-btn__go">
          <img src={ArrowRight} alt="arrow-go"/>
        </div>
      )}
    </>

  )
}

index.defaultProps = {
  type: 'desktop'
}

export default index
