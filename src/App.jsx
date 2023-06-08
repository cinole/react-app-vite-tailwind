import AppRoute from '@/route'
import ContextProdiver from '@/context'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers'

import 'react-toastify/dist/ReactToastify.css'
import { injectStyle } from 'react-toastify/dist/inject-style'
if (typeof window !== 'undefined') {
  injectStyle()
}

function App() {
  return (
    <ContextProdiver>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <AppRoute />
      </LocalizationProvider>
    </ContextProdiver>
  )
}

export default App
