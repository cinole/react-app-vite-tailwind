import React from 'react'

const index = ({ text, className }) => {
  return (
    <div className={`wp-nodata text-center ${className}`}>
      <img src="/static/images/no-data.png"/>
      <div className="mt-6 text-sub">
        {text || 'No data'}
      </div>
    </div>
  )
}
export default index
