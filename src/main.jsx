import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import VslPage from './pages/vsl/VslPage.jsx'
import WatchPage from './pages/vsl/WatchPage.jsx'
import InvitePage from './pages/InvitePage.jsx'
import ThankYouPage from './pages/ThankYouPage.jsx'
import DesignsPage from './pages/DesignsPage.jsx'
import CardDesignsPage from './pages/CardDesignsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VslPage />} />
        <Route path="/vsl/watch" element={<WatchPage />} />
        <Route path="/invite" element={<InvitePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/designs" element={<DesignsPage />} />
        <Route path="/card-designs" element={<CardDesignsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
