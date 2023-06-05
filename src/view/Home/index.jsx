import React, { useState, useEffect } from 'react'
// import Slider from 'react-slick'
// import ChartMain from './components/ChartMain'
import Report from './components/Report'
import Balance from './components/Balance'
import Bet from './components/Bet'
import Oder from './components/Oder'
// import './style.scss'

const index = () => {
  return (
    <div className="home flex gap-2 px-4 px-6">
      {/* <div className="marquee flex items-center gap-6">
        {new Array(3).fill(0).map((_, idx) => (
          <>
            <div
              key={idx}
              className={'marquee__item flex items-center justify-center gap-6 py-2 inc'}
            >
              <div className="fs-10 text-sub">9:45:36 AM</div>
              <div className="flex items-center fs-12">
                <span className="marquee__item--icon text-center d-block mr-2">
                  <ArrowUpwardIcon/>
                </span>
                <span className="text-green">123.678 BTC</span>
              </div>
            </div>
            <div
              key={`dou-${idx}`}
              className={'marquee__item flex items-center justify-center gap-6 py-2 dec'}
            >
              <div className="fs-10 text-sub">9:45:36 AM</div>
              <div className="flex items-center fs-12">
                <span className="marquee__item--icon text-center d-block mr-2">
                  <ArrowDownwardIcon/>
                </span>
                <span className="text-red">123.678 BTC</span>
              </div>
            </div>
          </>
        ))}
      </div> */}
      <div className="home__left flex col justify-between">
        <Report />
        <Balance />
      </div>
      <div className="home__center flex-fill flex col justify-between">
        {/* <ChartMain /> */}
        <Bet />
      </div>
      <div className="home__right">
        <Oder />
      </div>
    </div>
  )
}

export default index
