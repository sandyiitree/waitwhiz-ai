import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import PrivacyPolicy from './PrivacyPolicy';
import DataDeletion from './DataDeletion';
import ScrollToTop from './ScrollToTop';
import StickyContact from './StickyContact';
import WashroomFeedback from './WashroomFeedback';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <StickyContact />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
        <Route path="/washroom-feedback" element={<WashroomFeedback />} />
      </Routes>
    </Router>
  );
}

export default App;