import { useState } from 'react'
import Chart from '@/components/Chart'

const chartTabs = ['1m', '30m', '1h', '1w', '1mo', '1y']
const Index = () => {
  const [chartTab, setChartTab] = useState(0)

  return (
    <div className="home__center--top rounded-md">
      <div className="home__center--top-tab flex">
        {chartTabs.map((item, idx) => (
          <div
            key={item}
            className={`fs-14 text-center ${!!(chartTab === idx) && 'text-cyan'}`}
            onClick={() => setChartTab(idx)}
          >
            {item}
          </div>
        ))}
        <div className={`run-bar p-0 run-bar-${chartTab}`} />
      </div>
      <Chart type="candlestick" height={350}/>
    </div>
  )
}
export default Index
