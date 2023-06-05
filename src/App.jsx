import AppRoute from '@/route'
import ContextProdiver from '@/context'

import 'react-toastify/dist/ReactToastify.css'
import { injectStyle } from 'react-toastify/dist/inject-style'
if (typeof window !== 'undefined') {
  injectStyle()
}

function App() {
  return (
    <ContextProdiver>
      <AppRoute />
    </ContextProdiver>
  )
}

export default App
