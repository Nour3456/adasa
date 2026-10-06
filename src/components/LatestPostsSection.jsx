import React from 'react';
import '../LatestPostsSection.css';
import postsData from "../posts.json";

export default function LatestPostsSection() {
  const latestPosts = postsData.posts
    .filter(post => !post.featured)
    .slice(0, 3);
  return (
    <section className="latest-posts-section py-5 text-white" dir="rtl">
      <div className="container">

        <div className="d-flex justify-content-between align-items-end mb-4">

          <div className="text-end">
            <div className="d-inline-flex align-items-center gap-2 badge-top px-3 py-1 mb-2 rounded-pill">
              <span className="dot-orange">● ●</span>
              <span className="text-orange-light fs-7">الأحدث</span>
            </div>
            <h2 className="fw-bold mb-1 fs-1 text-white">أحدث المقالات</h2>
            <p className="subtitle-text fs-7 mb-0">محتوى جديد طازج من المطبعة</p>
          </div>
          <a href="#all-posts" className="view-all-link text-decoration-none fw-bold fs-6">
            عرض جميع المقالات <span className="arrow">←</span>
          </a>

        </div>

        <div className="row g-4">
          {latestPosts.map((post) => (
            <div key={post.id} className="col-12 col-md-4">
              <div className="latest-card card h-100 rounded-4 border-0 overflow-hidden text-white text-end">

                <div className="card-img-wrapper position-relative">
                  <span className="badge-category-overlay position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill fs-7 fw-bold">
                    {post.category}
                  </span>
                  <img src={post.image} alt={post.title} className="card-img-top custom-card-img" />
                </div>
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>

                    <div className="d-flex align-items-center gap-2 text-grey-span fs-7 mb-3">
                      <span>⏱ {post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="card-title fw-bold fs-5 mb-2">{post.title}</h3>
                    <p className="card-text text-muted fs-7 mb-4 line-clamp-2">{post.excerpt}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top border-dark-subtle mt-auto">
                    <div className="card-arrow-btn d-flex align-items-center justify-content-center rounded-circle">
                      <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div className="text-start">
                        <h6 className="mb-0 fs-7 fw-bold text-white">{post.author.name}</h6>
                        <small className="text-grey-span fs-8">{post.author.role || 'مصور ومؤلف'}</small>
                      </div>
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="rounded-circle author-avatar"
                      />
                    </div>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}