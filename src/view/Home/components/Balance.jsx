import IconAddCard from '@/assets/icons/AddCard.svg'
import BnbIcon from '@/assets/coin/bnb-n.svg'

const index = () => {
  return (
    <div className="home__left--bottom">
      <div className="title bd-bottom fs-16 px-4">My Balance</div>
      <div className="detail p-3">
        <div className="pb-4 flex justify-between items-start">
          <div className="flex items-center">
            <BnbIcon />
            <div className="fs-10 text-sub ml-2">
              <span className="fs-20 fw-semibold text-main">2000 BTC </span>
              <br /> $12345.6789
            </div>
          </div>
          <button className="rounded-sm fs-10 px-4 py-2  fw-semibold text-main">
            <IconAddCard className="fs-12 mr-1 align-top" /> Deposits
          </button>
        </div>
        <div className="px-4 bd-y">
          <div className="flex justify-between fs-12 text-sub">
            Available funds:
            <span className="fw-10 text-orange">2,000 BTC</span>
          </div>
          <div className="flex justify-between fs-12 mt-6 text-sub">
            Earnings available now:
            <span className="fw-10 text-sub">457,930 BTC</span>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex justify-between fs-12">
            30-day Volume:
            <span className="fw-semibold">200 BTC</span>
          </div>
          <p className="mb-0 fs-10 text-cyan mt-6">Refreshes every 24 hrs</p>
        </div>
      </div>
    </div>
  )
}
export default index
