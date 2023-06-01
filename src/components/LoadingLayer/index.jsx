const Index = ({ loading }) => {
  return (
    <div
      className={`loading-global d-flex align-items-center justify-content-center ${
        loading ? '' : 'hidden'
      }`}
    >
      <div className="loading-global-center">
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
export default Index
