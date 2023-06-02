import IconArrowUpward from '@/assets/icons/ArrowUpward.svg'
// import Dropdown from '@/components/Dropdown'

const index = () => {
  return (
    <div className="home__left--top">
      <div className="wp-chart">
        <div className="fs-10 text-sub text-capitalize">Bitcoin/ US Dollar</div>
        {/* <Dropdown
          options={['BTC/ USD', 'USDT/ USD']}
          className="dropdown-coin fs-20 fw-semibold"
        /> */}
        <img src="/static/images/home/linechart.png" alt="" />
      </div>
      <div className="wp-report mt-4">
        <div className="fs-10 text-sub">
          Daily change{' '}
          <span className="text-green">
            <IconArrowUpward className="fs-10" /> 0.32%
          </span>
        </div>
        <div className="fs-10 text-uppercase text-sub">
          <span className="fs-16 text-main">20.2476</span> USD
        </div>
      </div>
      <div className="wp-report mt-3">
        <div className="fs-10 text-sub">24h volume</div>
        <div className="fs-10 text-uppercase text-sub">
          <span className="fs-16 text-main">381.404863.1842</span> BTC
        </div>
      </div>
      <div className="wp-report mt-3">
        <div className="fs-10 text-sub">Day’s range</div>
        <div className="fs-10 text-uppercase text-sub">
          <span className="fs-16 text-main">2678.1842 - 2678.1900</span> BTC
        </div>
      </div>
    </div>
  )
}
export default index
