import { useState } from 'react'
import IconArrowDownward from '@/assets/icons/ArrowDownward.svg'
import IconArrowUpward from '@/assets/icons/ArrowUpward.svg'
import IconHelpOutline from '@/assets/icons/HelpOutline.svg'
// import { CircularProgress } from '@mui/material'

const Index = () => {
  const [amount, setAmount] = useState(1000)

  const handlePlus = () => {
    setAmount(amount + 1)
  }
  const handleSub = () => {
    if (amount <= 0) setAmount(0)
    else setAmount(amount - 1)
  }
  return (
    <div className="home__center--bottom">
      <div className="title bd-bottom text-center fs-16">Bet</div>
      <div className="detail flex gap-8 flex-wrap justify-center px-4">
        <div className="detail__left">
          <div className="detail__left--title fs-10 text-sub mb-6">Amount:</div>
          <div className="detail__left--amount flex items-center rounded-sm overflow-hidden">
            <button
              className="fs-24 fw-semibold text-main px-6 py-2"
              onClick={handleSub}
            >
              -
            </button>
            {/* <input
                  className="flex-fill w-3/12 fs-18 fw-bold border-0 bg-transparent text-main text-center"
                  type="number"
                  placeholder="$1000"
                  value={amount}
                  onChange={onChangeAmount}
                /> */}
            <div className="flex-fill w-3/12 fs-18 fw-bold border-0 bg-transparent text-main text-center">
              ${amount}
            </div>
            <button
              className="fs-24 fw-semibold text-main px-6 py-2"
              onClick={handlePlus}
            >
              +
            </button>
            <div className="text-coin align-self-stretch fs-14 text-sub px-6 flex items-center">
              USD
            </div>
          </div>
          <div className="detail__left--list flex gap-2 flex-wrap mt-6">
            <div className="flex-fill fs-16 fw-semibold text-center rounded-sm p-2">
              + 5
            </div>
            <div className="flex-fill fs-16 fw-semibold text-center rounded-sm p-2">
              + 10
            </div>
            <div className="flex-fill fs-16 fw-semibold text-center rounded-sm p-2">
              + 15
            </div>
            <div className="flex-fill fs-16 fw-semibold text-center rounded-sm p-2">
              + 20
            </div>
            <div className="flex-fill fs-16 fw-semibold text-center rounded-sm p-2">
              + 30
            </div>
            <div className="flex-fill fs-16 fw-semibold text-center rounded-sm p-2">
              + 100
            </div>
            <div className="flex-fill fs-16 fw-semibold text-center rounded-sm p-2">
              + 200
            </div>
            <div className="flex-fill fs-16 fw-semibold text-center rounded-sm p-2">
              + 500
            </div>
            <div className="flex-fill fs-16 fw-semibold text-center rounded-sm p-2">
              All
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <button className="btn-sell flex-fill fs-14 fw-bold rounded-sm uppercase text-main">
              <IconArrowDownward className="fs-18 align-top" /> sell
            </button>
            <button className="flex-fill fs-14 fw-bold rounded-sm uppercase text-main">
              <IconArrowUpward className="fs-18 align-top" /> buy
            </button>
          </div>
        </div>
        <div className="detail__right">
          <div className="detail__right--title fs-10 text-sub">
            Emotion Forecast:
          </div>
          <div className="detail__right--bar w-full rounded-sm mt-6">
            <div className="inside"></div>
          </div>
          <div className="detail__right--label flex justify-between text-green fs-10 mt-2">
            <span>50% </span> 50%
          </div>
          <div className="detail__right--block flex justify-between gap-2 mt-6">
            <div className="detail__right--block-item flex-equal rounded-sm p-2">
              <p className="fs-10 mb-2">Profit rate</p>
              <p className="fs-20 fw-bold text-cyan">95%</p>
            </div>
            <div className="detail__right--block-item flex-equal rounded-sm p-2">
              <p className="fs-10 mb-2">Predicted profit</p>
              <p className="fs-20 fw-bold text-lightgreen">+1950 BTC</p>
            </div>
          </div>
          <div className="detail__right--action flex items-center justify-center mt-6">
            <div className="relative">
              {/* <CircularProgress
                className="wp-circle relative"
                variant="determinate"
                value={80}
              />
              <span className="action-text absolute fs-16 fw-bold text-orange">
                15s
              </span> */}
            </div>
            <div className="fs-10 text-sub ml-2">
              The price will be caculated in{' '}
              <span className="text-main">
                15s <IconHelpOutline className="fs-14" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
