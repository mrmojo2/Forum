import React from "react";
import { Routes, Route, BrowserRouter, ScrollRestoration } from 'react-router-dom'
import { Home, SharedLayout, Syllabus, Notice, Events, Login, ProtectedRoute, CreatePost, Register, NotFound, SinglePostPage, SearchResults } from './pages/'
import { EditProfile, Profile, ProfileComments, ProfilePosts, ProfileSaved } from "./pages/Profile";

import './index.css'
import ScrollTop from "./utils/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
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
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="search" element={<SearchResults />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
