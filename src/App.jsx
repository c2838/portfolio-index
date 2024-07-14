import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortfolioPage, AboutMePage, HomePage } from './assets/page';
// const basename = process.env.PUBLIC_URL
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="portfolio-index/aboutme" element={<AboutMePage />} />
        <Route path="portfolio-index/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
