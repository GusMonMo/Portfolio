import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/Main.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Curriculo from './Pages/Curriculo'
import { ThemeProvider } from './Contexts/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
