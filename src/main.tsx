import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/Main.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Components/Layout/index'
import Home from './Pages/Home'
import Curriculo from './Pages/Curriculo/index'
import ErrorPage from './Pages/Error404/index'
import { ThemeProvider } from './Contexts/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route element={<Layout/>}>
            <Route path="/home" element={<Home />} />
            <Route path="/curriculo" element={<Curriculo />} />
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
