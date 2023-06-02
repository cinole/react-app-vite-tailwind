import IconArrowDownward from '@/assets/icons/ArrowDownward.svg'
import IconArrowUpward from '@/assets/icons/ArrowUpward.svg'

const Index = ({ item }) => {
  return (
    <div
      className={`detail__item d-flex justify-content-between align-items-center px-3 py-1 ${
        item.action === 'buy' ? 'inc' : 'dec'
      }`}
    >
      <div className="d-flex align-items-center">
        <span
          className={`detail__item--icon text-center d-block me-2 ${
            item.action === 'buy' ? 'inc' : 'dec'
          }`}
        >
          {item.action === 'buy' ? (
            <IconArrowUpward className="align-text-top fs-12" />
          ) : (
            <IconArrowDownward className="align-text-top fs-12" />
          )}
        </span>
        <div className="text-uppercase fs-10">
          <span
            className={`fs-12 fw-semibold text-${
              item.action === 'buy' ? 'green' : 'red'
            }`}
          >
            {item.action}
          </span>
          <br /> ${item.price}
        </div>
      </div>
      <div className="text-uppercase fs-10 text-sub text-end">
        <span
          className={`fs-12 fw-semibold text-${
            item.profitStatus ? 'green' : 'red'
          }`}
        >
          {item.profitStatus ? '+' : '-'} ${item.profitAmount}
        </span>
        <br /> {item.time}
      </div>
    </div>
  )
}
export default Index
