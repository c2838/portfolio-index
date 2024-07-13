import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortfolioPage, AboutMePage, HomePage } from './assets/page';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="aboutme" element={<AboutMePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
