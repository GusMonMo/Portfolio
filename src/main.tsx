import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/Main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Curriculo from './Pages/Curriculo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/curriculo" element={<Curriculo />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
