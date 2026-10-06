import React from 'react';
import '../NewsletterSection.css';

export default function NewsletterSection() {
  return (
    <section className="newsletter-section py-5 text-white" dir="rtl">
      <div className="container d-flex justify-content-center">
        <div className="newsletter-card  p-md-5 rounded-5 text-center w-100">

          <div className="icon-wrapper mx-auto mb-4 d-flex align-items-center justify-content-center rounded-3">
            <i className="fa-regular fa-envelope fs-4 text-white"></i>
          </div>

          <h2 className="fw-bold mb-3 newsletter-title">
            اشترك في <span className="text-orange">نشرتنا الإخبارية</span>
          </h2>
          <p className="newsletter-subtitle mb-4">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="newsletter-form mx-auto mb-4">
            <div className="d-flex flex-column flex-sm-row gap-2">
              <input
                type="email"
                className="form-control newsletter-input rounded-3 text-end text-white"
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
              <button type="submit" className="btn btn-orange text-white fw-bold px-4 rounded-3">
                اشترك الآن
              </button>
            </div>
          </form>

          <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap newsletter-footer fs-7">
            <div className="avatars-group d-flex align-items-center ms-2">
              <img src="https://i.pravatar.cc/100?img=33" alt="user" className="avatar-img" />
              <img src="https://i.pravatar.cc/100?img=12" alt="user" className="avatar-img" />
              <img src="https://i.pravatar.cc/100?img=60" alt="user" className="avatar-img" />
            </div>
            <span>انضم لـ <strong className="text-white">+10,000</strong> مصور</span>
            <span className="dot-separator">•</span>
            <span>بدون إزعاج</span>
            <span className="dot-separator">•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>

        </div>
      </div>
    </section>
  );
}