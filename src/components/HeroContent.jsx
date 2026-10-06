import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroContent() {
  return (
    <div className="hm-content">
      <div className="hm-badge">
        <span className="hm-dots">● ●</span>
        <span className="hm-badge-text">مرحباً بك في عدسة</span>
      </div>

      <h1 className="hm-title">
        اكتشف <span className="hm-accent">فن</span>
        <br />
        التصوير الفوتوغرافي
      </h1>

      <p className="hm-text">
        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
      </p>

      <div className="hm-actions">
        <Link to="/blog" className="hm-btn hm-btn-primary">
          استكشف المقالات
          <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
        </Link>
        <Link to="/about" className="hm-btn hm-btn-outline">
          <i className="fa-regular fa-circle-info" aria-hidden="true"></i>
          اعرف المزيد
        </Link>
      </div>
    </div>
  );
}