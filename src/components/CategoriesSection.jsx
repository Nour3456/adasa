import React from 'react';
import '../CategoriesSection.css';

const categories = [
  { id: 1, title: 'إضاءة', count: '3 مقالة', iconClass: 'fa-regular fa-sun' },
  { id: 2, title: 'بورتريه', count: '3 مقالة', iconClass: 'fa-regular fa-user' },
  { id: 3, title: 'مناظر طبيعية', count: '2 مقالة', iconClass: 'fa-solid fa-mountain' },
  { id: 4, title: 'تقنيات', count: '5 مقالة', iconClass: 'fa-solid fa-sliders' },
  { id: 5, title: 'معدات', count: '3 مقالة', iconClass: 'fa-solid fa-camera' },
];

export default function CategoriesSection() {
  return (
    <section className="categories-section py-5 text-white text-center" dir="rtl">
      <div className="container">

        <div className="d-flex flex-column align-items-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 category-badge px-3 py-1 mb-3 rounded-pill">
            <span className="dot-orange">● ●</span>
            <span className="text-orange-light fs-7">التصنيفات</span>
          </div>
          <h2 className="fw-bold fs-1 text-white mb-2">استكشف حسب الموضوع</h2>
          <p className="subtitle-text fs-6 mb-0">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>
        <div className="row  g-4 flex-row-reverse justify-content-start">
          {categories.map((cat) => (
            <div key={cat.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="category-card p-4 rounded-4 text-end d-flex flex-column justify-content-between position-relative">

  <div className="d-flex justify-content-between align-items-start mb-4">

    <div className="cat-icon-box d-flex align-items-center justify-content-center rounded-3">
      <i className={cat.iconClass}></i>
    </div>
    <div className="hover-arrow d-flex align-items-center justify-content-center rounded-circle">
      <i className="fa-solid fa-chevron-left"></i>
    </div>

  </div>

  <div className="mt-auto text-start">
    <h3 className="cat-title fw-bold fs-4 mb-1 text-white">{cat.title}</h3>
    <span className="cat-count fs-7">{cat.count}</span>
  </div>

</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}