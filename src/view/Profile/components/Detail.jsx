import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import IconChevronDown from '@/assets/icons/ChevronDown.svg'
import IconAddCard from '@/assets/icons/AddCard.svg'
import Chart from '@/components/Chart'

import { Collapse, initTE } from "tw-elements";
initTE({ Collapse });
// todo: use tw-elements, collapse,

const Index = ({ className }) => {
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Breakeven', 'Lose', 'Win'],
    colors: ['#52D8C6', '#F43C3C', '#00E283', '#52D8C633'],
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
        },
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      fontSize: '12px',
      fontWeight: 400,
      inverseOrder: true,
      labels: {
        colors: ['#8A9195'],
      },
      markers: {
        width: 6,
        height: 6,
        // strokeWidth: 2
      },
    },
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     options: {
    //       chart: {
    //         width: 200
    //       },
    //       legend: {
    //         position: 'bottom'
    //       }
    //     }
    //   }
    // ]
  }

  return (
    <div className={`detail bd-left ${className}`}>
      <div className="detail__balance p-4 bd-bottom">
        <div className="capitalize flex justify-between bd-bottom pb-4 fs-16">
          My balance
          <div className="text-right">
            <div className="fs-20 text-orange">$2000 USD</div>
            <button className="flex float-right rounded fs-10 px-4 py-1 mt-1 font-semibold text-main">
              <IconAddCard className="fs-14 mr-1 align-top" /> Deposits
            </button>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex justify-between items-center fs-12 text-sub">
            30-day Volume: <span className="text-main fs-10">$200</span>
          </div>
          <div className="text-orange-opacity fs-10 mt-2">
            Refreshes every 24 hrs
          </div>
        </div>
      </div>
      <div className="detail__oder p-4 bd-bottom">
        <div className="capitalize flex justify-between items-center fs-16">
          My oder
          <button
            className="btn-collapse bg-transparent"
            type="button"
            data-te-collapse-init
            data-te-ripple-init
            data-te-ripple-color="dark"
            data-te-target="#collapseOder"
            aria-expanded="false"
            aria-controls="collapseOder"
          >
            <IconChevronDown className="fs-4 text-sub" />
          </button>
        </div>
        <div
          className="!visible hidden trans-cub"
          id="collapseOder"
          data-te-collapse-item
        >
          <div className="bd-bottom pb-4">
            <div className="flex justify-between items-center fs-12 text-sub mt-6 mb-2">
              Net profit: <span className="fs-10 text-white">$200</span>
            </div>
            <div className="flex justify-between items-center fs-12 text-sub">
              Earnings available now:
              <span className="fs-10 text-white">$15,143.00 USD</span>
            </div>
          </div>
          <div className="pt-6">
            <p className="fs-12 text-sub mb-2">Quick Sumary</p>
            <div className="bar flex mb-2">
              <div className="bar-inside" style={{ width: '9.8%' }} />
              <div className="bar-left flex-auto" />
            </div>
            <div className="flex justify-between items-center fs-12 text-sub">
              <div className="">
                <div className="dot-red inline-flex mr-1" />
                Sell Oder <span className="fs-10 text-red">9.80%</span>
              </div>
              <div className="">
                Buy Oder <span className="fs-10 text-green">91.20%</span>
                <div className="dot-green inline-flex ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail__stat p-4">
        <div className="capitalize flex justify-between items-center fs-16 mb-4">
          Trade Stats
          <button
            className="btn-collapse bg-transparent"
            type="button"
            data-te-collapse-init
            data-te-ripple-init
            data-te-ripple-color="dark"
            data-te-target="#collapseStat"
            aria-expanded="false"
            aria-controls="collapseStat"
          >
            <KeyboardArrowDownIcon className="fs-4 text-sub" />
          </button>
        </div>
        <div className="!visible hidden trans-cub" id="collapseStat" data-te-collapse-item>
          <div className="bd-bottom pb-4">
            <div className="relative">
              <Chart
                className="wp-chart"
                type="donut"
                options={options}
                series={[14, 25, 41, 20]}
              />
              <div className="inside-donut text-center">
                <div className="fs-10 text-sub bd-bottom pb-1 mx-auto">
                  Times <br />{' '}
                  <span className="fs-16 text-white font-semibold">51</span>
                </div>
                <div className="fs-10 text-sub pt-1">
                  Win rate <br />{' '}
                  <span className="fs-16 text-white font-semibold">70.26%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center fs-12 text-sub pt-6">
            Total transaction
            <span className="fs-10 text-white">$26,996.00 USD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
