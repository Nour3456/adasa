import React from 'react';
import '../BlogHero.css';

export default function BlogHero() {
  return (
    <section className="blog-hero-section text-center text-white position-relative d-flex align-items-center justify-content-center">
      <div className="hero-glow"></div>

      <div className="container position-relative z-2">
        <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill hero-badge mb-4">
          <span className="dot-orange"></span>
          <span className="badge-text fs-7">مدونتنا</span>
          <i className="fa-regular fa-newspaper badge-icon"></i>
        </div>
        <h1 className="fw-bold hero-title mb-3">
          استكشف <span className="text-orange">مقالاتنا</span>
        </h1>
        <p className="hero-subtitle mx-auto">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
    </section>
  );
}