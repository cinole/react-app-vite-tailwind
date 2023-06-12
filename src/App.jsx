import AppRoute from '@/route'
import ContextProdiver from '@/context'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers'

import store from './store'
import { Provider } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'
import { injectStyle } from 'react-toastify/dist/inject-style'
if (typeof window !== 'undefined') {
  injectStyle()
}

function App() {
  return (
    <Provider store={store}>
      <ContextProdiver>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <AppRoute />
        </LocalizationProvider>
      </ContextProdiver>
    </Provider>
  )
}

export default App
