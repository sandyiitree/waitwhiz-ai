import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import PrivacyPolicy from './PrivacyPolicy';
import DataDeletion from './DataDeletion';
import ScrollToTop from './ScrollToTop';
import StickyContact from './StickyContact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <StickyContact />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
      </Routes>
    </Router>
  );
}

export default App;