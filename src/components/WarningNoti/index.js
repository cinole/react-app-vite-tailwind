import React from 'react'
const index = ({ text }) => {
  return (
    <div className="wp-warning d-flex align-items-center justify-content-center">
      <div className="wp-warning-icon">
        <img src="/static/icons/icon-warning-mint.svg" alt="" />
      </div>
      <div className="wp-warning-text text-white">{text}</div>
    </div>
  )
}
export default index
