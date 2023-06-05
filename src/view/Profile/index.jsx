import React, { useState, useEffect } from 'react'

import Detail from './components/Detail'
import TxItem from './components/TxItem'
import IconCalendar from '@/assets/icons/Calendar.svg'
// import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
// import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
// import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined'
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

const listTx = [
  {
    id: '107661742',
    time: '02/17/2023 13:21:01',
    period: '30s',
    oder: 'Buy',
    startPrice: '23,735.24',
    endPrice: '23,735.6',
    amount: '400',
    profit: 780
  },
  {
    id: '107661743',
    time: '02/17/2023 13:21:01',
    period: '30s',
    oder: 'Buy',
    startPrice: '23,735.24',
    endPrice: '23,735.6',
    amount: '400',
    profit: 780
  },
  {
    id: '107661744',
    time: '02/17/2023 13:21:01',
    period: '30s',
    oder: 'Sell',
    startPrice: '23,735.24',
    endPrice: '23,735.6',
    amount: '400',
    profit: -400
  },
  {
    id: '107661745',
    time: '02/17/2023 13:21:01',
    period: '30s',
    oder: 'buy',
    startPrice: '23,735.24',
    endPrice: '23,735.6',
    amount: '400',
    profit: -400
  },
  {
    id: '107661746',
    time: '02/17/2023 13:21:01',
    period: '30s',
    oder: 'Sell',
    startPrice: '23,735.24',
    endPrice: '23,735.6',
    amount: '400',
    profit: -400
  },
  {
    id: '107661747',
    time: '02/17/2023 13:21:01',
    period: '30s',
    oder: 'buy',
    startPrice: '23,735.24',
    endPrice: '23,735.6',
    amount: '400',
    profit: 400
  }
]
const index = () => {
  return (
    <div className="profile flex gap-2">
      <div className="history flex-fill my-4 ms-6 mr-4 py-1">
        <div className="history__header flex items-center justify-between px-4 px-4">
          <div>Transaction history</div>
          <div className="history__header--filter">
            {/* <DateRangePicker
              localeText={{ start: 'start time', end: 'end time' }}
            /> */}
            <DateTimePicker
              className="fs-12"
              ampm={false}
              // slotProps={{
              //   OpenPickerIcon: {
              //     fontSize: 12
              //   }
              // }}
              slots={{ openPickerIcon: IconCalendar }}
              format="MM/DD/YYYY - hh:mm"
            />
          </div>
        </div>
        <table className="history__tx w-full">
          <thead>
            <tr className="history__tx--header uppercase fs-12 bd-bottom">
              <td>id</td>
              <td>start time</td>
              <td>period</td>
              <td>oder</td>
              <td>starting price</td>
              <td>ends price</td>
              <td>amount</td>
              <td>profit</td>
            </tr>
          </thead>
          <tbody className="">
            {listTx.map((i, idx) => (
              <TxItem className="" key={idx} item={i} />
            ))}
          </tbody>
        </table>
      </div>
      <Detail />
    </div>
  )
}

export default index
