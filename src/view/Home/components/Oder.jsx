import React, { useState } from 'react'

import OderItem from './OderItem'

const listOder = [
  {
    date: 'today',
    list: [
      {
        action: 'buy',
        price: 400,
        profitStatus: true,
        profitAmount: 678,
        time: '9:20:35 AM'
      },
      {
        action: 'buy',
        price: 400,
        profitStatus: true,
        profitAmount: 220,
        time: '9:20:35 AM'
      },
      {
        action: 'buy',
        price: 400,
        profitStatus: false,
        profitAmount: 123,
        time: '9:20:35 AM'
      },
      {
        action: 'sell',
        price: 400,
        profitStatus: false,
        profitAmount: 110,
        time: '9:20:35 AM'
      },
      {
        action: 'sell',
        price: 400,
        profitStatus: true,
        profitAmount: 110,
        time: '9:20:35 AM'
      },
      {
        action: 'sell',
        price: 400,
        profitStatus: true,
        profitAmount: 110,
        time: '9:20:35 AM'
      },
      {
        action: 'sell',
        price: 400,
        profitStatus: false,
        profitAmount: 110,
        time: '9:20:35 AM'
      },
      {
        action: 'sell',
        price: 400,
        profitStatus: true,
        profitAmount: 110,
        time: '9:20:35 AM'
      }
    ]
  },
  {
    date: '23 Feb 2023',
    list: [
      {
        action: 'buy',
        price: 400,
        profitStatus: true,
        profitAmount: 678,
        time: '9:20:35 AM'
      },
      {
        action: 'sell',
        price: 400,
        profitStatus: true,
        profitAmount: 110,
        time: '9:20:35 AM'
      },
      {
        action: 'sell',
        price: 400,
        profitStatus: false,
        profitAmount: 110,
        time: '9:20:35 AM'
      }
    ]
  },
  {
    date: '27 Feb 2023',
    list: [
      {
        action: 'buy',
        price: 400,
        profitStatus: true,
        profitAmount: 678,
        time: '9:20:35 AM'
      },
      {
        action: 'buy',
        price: 400,
        profitStatus: true,
        profitAmount: 220,
        time: '9:20:35 AM'
      },
      {
        action: 'sell',
        price: 400,
        profitStatus: true,
        profitAmount: 110,
        time: '9:20:35 AM'
      },
      {
        action: 'sell',
        price: 400,
        profitStatus: false,
        profitAmount: 110,
        time: '9:20:35 AM'
      }
    ]
  }
]
const index = () => {
  const [tab, setTab] = useState(0)

  return (
    <>
      <p className="home__right--title mb-0 py-2 text-center fs-16">Oder</p>
      <div
        className={`home__right--tab bd-y w-100 d-flex text-center ${
          tab === 0 ? 'left' : 'right'
        }`}
      >
        <div
          className={`flex-fill pointer fs-12 ${!!(tab === 0) && 'active'}`}
          onClick={() => setTab(0)}
        >
          Open
        </div>
        <div
          className={`flex-fill pointer fs-12 ${!!(tab === 1) && 'active'}`}
          onClick={() => setTab(1)}
        >
          Close
        </div>
      </div>
      <div className="home__right--detail pb-1 pt-2">
        <div className="detail__title d-flex justify-content-between  fs-10 px-3">
          <div>Your Order</div>
          <div>Profit</div>
        </div>
        <div className="h-100">
          {listOder.map((item, i) => (
            <>
              <p
                key={i}
                className="fs-10 text-sub text-center text-capitalize mb-0 py-2"
              >
                {item.date}
              </p>
              {item.list.map((c, idx) => (
                <OderItem key={idx + '-' + item.date} item={c} />
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  )
}
export default index
