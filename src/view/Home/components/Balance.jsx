import IconAddCard from '@/assets/icons/AddCard.svg'
import BnbIcon from '@/static/images/coin/bnb-n.svg'

const index = () => {
  return (
    <div className="home__left--bottom">
      <div className="title bd-bottom fs-16 px-3">My Balance</div>
      <div className="detail p-3">
        <div className="pb-3 d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center">
            <BnbIcon />
            <div className="fs-10 text-sub ms-2">
              <span className="fs-20 fw-semibold text-main">2000 BTC </span>
              <br /> $12345.6789
            </div>
          </div>
          <button className="rounded-1 fs-10 px-3 py-2  fw-semibold text-main">
            <IconAddCard className="fs-12 me-1 align-top" /> Deposits
          </button>
        </div>
        <div className="py-3 bd-y">
          <div className="d-flex justify-content-between fs-12 text-sub">
            Available funds:
            <span className="fw-10 text-orange">2,000 BTC</span>
          </div>
          <div className="d-flex justify-content-between fs-12 mt-3 text-sub">
            Earnings available now:
            <span className="fw-10 text-sub">457,930 BTC</span>
          </div>
        </div>
        <div className="pt-3">
          <div className="d-flex justify-content-between fs-12">
            30-day Volume:
            <span className="fw-semibold">200 BTC</span>
          </div>
          <p className="mb-0 fs-10 text-cyan mt-3">Refreshes every 24 hrs</p>
        </div>
      </div>
    </div>
  )
}
export default index
