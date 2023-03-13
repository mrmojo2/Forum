import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home, SharedLayout, Profile, Syllabus, Notice, Events, Login, ProtectedRoute, CreatePost, Register, NotFound } from './pages/'

import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="notice" element={<Notice />} />
          <Route path="events" element={<Events />} />
          <Route path="createPost" element={<CreatePost />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
