import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home, SharedLayout, Syllabus, Notice, Events, Login, ProtectedRoute, CreatePost, Register, NotFound, SinglePostPage } from './pages/'
import { Profile, ProfileComments, ProfilePosts, ProfileSaved } from "./pages/Profile";

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
          <Route path="profile/:userId" element={<Profile />} >
            <Route index element={<ProfilePosts />} />
            <Route path="comments" element={<ProfileComments />} />
            <Route path="savedPosts" element={<ProfileSaved />} />
          </Route>
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="notice" element={<Notice />} />
          <Route path="events" element={<Events />} />
          <Route path="createPost" element={<CreatePost />} />
          <Route path="/posts/:id" element={<SinglePostPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
