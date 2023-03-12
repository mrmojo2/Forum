import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home, SharedLayout, Profile, Syllabus, Notice, Events } from './pages/'

import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="notice" element={<Notice />} />
          <Route path="Events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
