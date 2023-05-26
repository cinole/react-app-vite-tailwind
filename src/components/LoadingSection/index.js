import React from 'react'

const index = ({ loading, ...props }) => {
  return (
    <div
      className={`loading-section d-flex align-items-center justify-content-center mt-5 ${
        loading ? '' : 'hidden'
      }`}
    >
      <div className="loading-section-center">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
export default index
