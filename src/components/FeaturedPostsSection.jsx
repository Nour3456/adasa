import React from "react";
import "../FeaturedPostsSection.css";
import postsData from "../posts.json";

export default function FeaturedPostsSection() {
  const featuredPosts = postsData.posts
    .filter((post) => post.featured)
    .slice(0, 3);

  return (
    <section className="featured-section py-5 text-white" dir="rtl">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div className="text-end">
            <div className="d-inline-flex align-items-center gap-2 badge-top px-3 py-1 mb-2 rounded-pill">
              <span className="dot-orange">●</span>
              <span className="text-orange-light fs-7 ">مميز</span>
            </div>
            <h1 className="fw-bold mb-1 fs-1 text-white">مقالات مختارة</h1>
            <p className="text-muted fs-7 mb-0">محتوى منتقى لبدء رحلة تعلمك</p>
          </div>

          <button className="btn btn-orange text-white px-4 py-2 rounded-3 fs-6 fw-bold">
            عرض الكل &gt;
          </button>
        </div>
       <div className="d-flex flex-column gap-4">
  {featuredPosts.map((post) => (
    <div
      key={post.id}
      className="featured-card card rounded-4 border-0 overflow-hidden text-white"
    >
      <div className="row g-0 align-items-stretch">
        <div className="col-lg-6 position-relative min-h-250">
          <span className="badge-featured position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill fs-7 fw-bold">
            ★ مميز
          </span>
          <div className="img-container h-100">
            <img
              src={post.image}
              alt={post.title}
              className="card-img-fit"
            />
          </div>
        </div>
        <div className="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-between text-end">
          <div>
            <div className="d-flex justify-content-start align-items-center gap-2 mb-3">
              <span className="badge-category px-2 py-1 rounded-2 fs-7">
                {post.category}
              </span>
              <span className="text-grey-span fs-7">
                ⏱ {post.readTime}
              </span>
            </div>

            <h2 className="post-title fw-bold mb-3">{post.title}</h2>
            <p className="post-excerpt text-muted fs-6 mb-4">
              {post.excerpt}
            </p>
          </div>
          <div className="d-flex flex-row-reverse justify-content-between align-items-center pt-3 mt-auto">
            <div className="d-flex align-items-center gap-2">
              <div className="text-end me-2">
                <h6 className="mb-0 fs-6 fw-bold text-white">
                  {post.author.name}
                </h6>
                <small className="text-grey-span fs-7">
                  {post.date}
                </small>
              </div>
              <div className="position-relative">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="rounded-circle author-img"
                />
                <span className="author-status-dot"></span>
              </div>
            </div>
            <div className="read-more d-flex align-items-center gap-2">
              <span className="arrow-icon">←</span>
              <span className="fs-6">اقرأ المقال</span>
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
