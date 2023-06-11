
const index = ({ loading }) => {
  return (
    <div
      className={`loading-section flex items-center justify-center mt-8 ${
        loading ? '' : 'hidden'
      }`}
    >
      <div className="loading-section-center">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
export default index
