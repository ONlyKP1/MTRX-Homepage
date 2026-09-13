import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { JoinPage } from './pages/JoinPage';
import { TechnologyPage } from './pages/TechnologyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          The homepage brings its own chrome.

          PublicLayout carries the ported navigation and footer, so wrapping it
          in Layout as well would render two navigation bars and two footers.
          The other pages still use the original Layout, which is why the route
          list looks uneven: they have not been ported yet.
        */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/product" element={<Layout><ProductPage /></Layout>} />
        <Route path="/join" element={<Layout><JoinPage /></Layout>} />
        <Route path="/technology" element={<Layout><TechnologyPage /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
