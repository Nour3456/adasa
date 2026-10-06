import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import PostDetail from './components/PostDetail';
import About from './components/About';
import FeaturedPostsSection from './components/FeaturedPostsSection';
import CategoriesSection from './components/CategoriesSection';
import LatestPostsSection from './components/LatestPostsSection';
import NewsletterSection from './components/NewsletterSection';

function HomePage() {
  return (
    <>
      <Home />
      <FeaturedPostsSection />
      <CategoriesSection />
      <LatestPostsSection />
      <NewsletterSection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ paddingTop: '80px', backgroundColor: '#0c0c0e', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}