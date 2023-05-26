import React from 'react'

const index = ({ loading }) => {
  return (
    <div
      className={`loading-global d-flex align-items-center justify-content-center ${
        loading?.status ? '' : 'hidden'
      }`}
    >
      <div className="loading-global-center">
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
