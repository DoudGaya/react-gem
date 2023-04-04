import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Recipe } from './pages/Recipe'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipe' element={<Recipe />} />
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
