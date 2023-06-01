const index = ({ id, text, className, onClick }) => {
  return (
    <button
      data-modal-target={id}
      data-modal-toggle={id}
      className={`${className}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default index
