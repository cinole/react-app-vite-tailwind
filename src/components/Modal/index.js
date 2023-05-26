
const index = ({ id, defaultOpen, children }) => {
  return (
    <div
      id={id}
      tabIndex="-1"
      aria-hidden={defaultOpen}
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      {children}
    </div>
  )
}

export default index
