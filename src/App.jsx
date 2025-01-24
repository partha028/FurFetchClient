import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRouter from './routes/AppRouter'
import AboutUs from './components/AbtAndContact/AboutUs'

function App() {

  return (
    <div className='app'>
      <AppRouter />
    </div>
  )
}

export default App
