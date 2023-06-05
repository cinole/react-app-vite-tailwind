import React from 'react'
const index = ({ text }) => {
  return (
    <div className="wp-warning flex items-center justify-center">
      <div className="wp-warning-icon">
        <img src="/static/icons/icon-warning-mint.svg" alt="" />
      </div>
      <div className="wp-warning-text text-white">{text}</div>
    </div>
  )
}
export default index
