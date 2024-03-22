
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Countries from '../landing/pages/Countries';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Countries />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;