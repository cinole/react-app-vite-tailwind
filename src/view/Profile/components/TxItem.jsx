import IconArrowDownward from '@/assets/icons/ArrowDownward.svg'
import IconArrowUpward from '@/assets/icons/ArrowUpward.svg'

const index = ({ item, className }) => {
  return (
    <tr className={`history__tx--item fs-12 ${className}`}>
      <td>{item.id}</td>
      <td>{item.time}</td>
      <td>{item.period}</td>
      <td
        className={`flex uppercase fw-bold text-${item.oder.toLowerCase() === 'buy' ? 'green' : 'red'}`}
      >
        <span
          className={`wp-icon text-white text-center d-block mr-2 ${
            item.oder.toLowerCase() === 'buy' ? 'inc' : 'dec'
          }`}
        >
          {item.oder.toLowerCase() === 'buy' ? (
            <IconArrowUpward className="fs-12" />
          ) : (
            <IconArrowDownward className="fs-12" />
          )}
        </span>
        {item.oder}
      </td>
      <td>{item.startPrice}</td>
      <td>{item.endPrice}</td>
      <td className="fw-semibold text-white">${item.amount}</td>
      <td className={`fw-semibold text-${item.profit >= 0 ? 'green' : 'red'}`}>
        {item.profit >= 0 ? '+' : '-'}${Math.abs(item.profit)}
      </td>
    </tr>
  )
}

export default index
