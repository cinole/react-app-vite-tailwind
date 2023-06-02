import React, { useState, useEffect } from 'react'
// import Slider from 'react-slick'
import ChartMain from './components/ChartMain'
import Report from './components/Report'
import Balance from './components/Balance'
import Bet from './components/Bet'
import Oder from './components/Oder'

const index = () => {
  return (
    <div className="home d-flex gap-2 py-3 px-4">
      {/* <div className="marquee d-flex align-items-center gap-4">
        {new Array(3).fill(0).map((_, idx) => (
          <>
            <div
              key={idx}
              className={'marquee__item d-flex align-items-center justify-content-center gap-4 py-2 inc'}
            >
              <div className="fs-10 text-sub">9:45:36 AM</div>
              <div className="d-flex align-items-center fs-12">
                <span className="marquee__item--icon text-center d-block me-2">
                  <ArrowUpwardIcon/>
                </span>
                <span className="text-green">123.678 BTC</span>
              </div>
            </div>
            <div
              key={`dou-${idx}`}
              className={'marquee__item d-flex align-items-center justify-content-center gap-4 py-2 dec'}
            >
              <div className="fs-10 text-sub">9:45:36 AM</div>
              <div className="d-flex align-items-center fs-12">
                <span className="marquee__item--icon text-center d-block me-2">
                  <ArrowDownwardIcon/>
                </span>
                <span className="text-red">123.678 BTC</span>
              </div>
            </div>
          </>
        ))}
      </div> */}
      <div className="home__left d-flex flex-column justify-content-between">
        <Report />
        <Balance />
      </div>
      <div className="home__center flex-fill d-flex flex-column justify-content-between">
        <ChartMain />
        <Bet />
      </div>
      <div className="home__right">
        <Oder />
      </div>
    </div>
  )
}

export default index
