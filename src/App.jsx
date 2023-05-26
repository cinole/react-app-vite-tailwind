import './App.css'
import AppRoute from '@/route'
import ContextProdiver from '@/context'
function App() {
  return (
    <AppRoute>
      <ContextProdiver />
    </AppRoute>
  )
}

export default App
