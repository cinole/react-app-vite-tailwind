import React from 'react'

const index = ({ loading }) => {
  return (
    <div
      className={`loading-global flex items-center justify-center ${
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
