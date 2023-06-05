import IconArrowDownward from '@/assets/icons/ArrowDownward.svg'
import IconArrowUpward from '@/assets/icons/ArrowUpward.svg'

const Index = ({ item }) => {
  return (
    <div
      className={`detail__item flex justify-between items-center px-4 py-1 ${
        item.action === 'buy' ? 'inc' : 'dec'
      }`}
    >
      <div className="flex items-center">
        <span
          className={`detail__item--icon text-center d-block mr-2 ${
            item.action === 'buy' ? 'inc' : 'dec'
          }`}
        >
          {item.action === 'buy' ? (
            <IconArrowUpward className="align-text-top fs-12" />
          ) : (
            <IconArrowDownward className="align-text-top fs-12" />
          )}
        </span>
        <div className="uppercase fs-10">
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
      <div className="uppercase fs-10 text-sub text-right">
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
