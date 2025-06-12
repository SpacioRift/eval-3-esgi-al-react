import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emotion from './Component/emotion.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path="/emotion" element={<Emotion />} />
          </Routes>
        </BrowserRouter> 
      </div>
    </>
  )
}

export default App
