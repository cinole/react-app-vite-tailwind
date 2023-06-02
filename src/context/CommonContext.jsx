import { createContext, useState, useMemo, useContext } from 'react'

const CommonContext = createContext()

export const CommonContextProvider = ({ children }) => {
  const [openModalConnect, setOpenModalConnect] = useState(false)

  const value = useMemo(
    () => ({
      openModalConnect,
      setOpenModalConnect,
    }),
    [openModalConnect, setOpenModalConnect]
  )

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  )
}

export const useCommonContext = () => useContext(CommonContext)

export default CommonContext