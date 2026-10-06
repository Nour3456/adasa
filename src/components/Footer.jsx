import React from "react";
import "../Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section text-white pt-5 pb-4" dir="rtl">
      <div className="container">
        <div className="row g-4 justify-content-between pb-5 border-bottom border-dark-subtle">
          <div className="col-12 col-md-4 text-end">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="brand-logo-box d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4">
                ع
              </div>
              <h3 className="fw-bold mb-0 text-white fs-3">عدسة</h3>
            </div>
            <p className="footer-desc fs-7 mb-4 pe-md-3">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="d-flex align-items-center gap-2 social-icons">
              <a href="#youtube" className="social-btn">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#linkedin" className="social-btn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#github" className="social-btn">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#x" className="social-btn">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2 text-end">
            <div className="section-header mb-3">
              <h6 className="fw-bold text-white mb-0 fs-6">استكشف</h6>
              <span className="orange-line"></span>
            </div>
            <ul className="footer-links fs-7">
              <li>
                <a href="#home">الرئيسية</a>
              </li>
              <li>
                <a href="#blog">المدونة</a>
              </li>
              <li>
                <a href="#about">من نحن</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 text-end">
            <div className="section-header mb-3">
              <h6 className="fw-bold text-white mb-0 fs-6">التصنيفات</h6>
              <span className="orange-line"></span>
            </div>
            <ul className="footer-links fs-7">
              <li>
                <a href="#lighting">إضاءة</a>
              </li>
              <li>
                <a href="#portrait">بورتوريه</a>
              </li>
              <li>
                <a href="#nature">مناظر طبيعية</a>
              </li>
              <li>
                <a href="#tech">تقنيات</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 text-end">
            <div className="section-header mb-3">
              <h6 className="fw-bold text-white mb-0 fs-6">ابقى على اطلاع</h6>
              <span className="orange-line"></span>
            </div>
            <p className="footer-desc fs-7 mb-3">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex flex-column gap-2"
            >
              <input
                type="email"
                className="form-control footer-input text-end text-white rounded-3"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <button
                type="submit"
                className="btn btn-orange-subscribe text-white fw-bold w-100 rounded-pill py-2"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 fs-7 copyright-text">
          <div className="d-flex gap-3 mb-2 mb-md-0">
            <a href="#privacy" className="bottom-link">
              سياسة الخصوصية
            </a>
            <a href="#terms" className="bottom-link">
              شروط الخدمة
            </a>
          </div>
          <div>
            © 2026 عدسة. صنع بكل <span className="text-orange">♥</span> جميع
            الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}
