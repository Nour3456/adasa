import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../posts.json';
import '../BlogPostsSection.css';

const ALL = 'جميع المقالات';
const PER_PAGE = 6;
const formatDate = (iso) =>
  new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(iso));

export default function BlogPostsSection() {
  const { posts, categories: catList } = postsData;
  const categories = useMemo(() => [ALL, ...catList.map((c) => c.name)], [catList]);

  const [selected, setSelected] = useState(ALL);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [view, setView] = useState('grid');

  const topRef = useRef(null);
  const firstRender = useRef(true);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const okCat = selected === ALL || p.category === selected;
      const okSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q));
      return okCat && okSearch;
    });
  }, [posts, selected, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [page]);

  const pickCategory = (cat) => {
    setSelected(cat);
    setPage(1);
  };

  const onSearch = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <section className="bp" dir="rtl">
      <div className="bp-bar">
        <div className="container bp-bar-inner">
          <div className="bp-search">
            <input
              type="text"
              value={query}
              onChange={onSearch}
              placeholder="ابحث في المقالات..."
              aria-label="ابحث في المقالات"
            />
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          </div>

          <div className="bp-cats">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => pickCategory(cat)}
                className={`bp-cat ${selected === cat ? 'is-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container bp-body">
        <div className="bp-toolbar" ref={topRef}>
          <span className="bp-count">
            عرض <strong>{filtered.length}</strong> مقالات
          </span>

          <div className="bp-view" role="group" aria-label="طريقة العرض">
            <button
              type="button"
              className={view === 'grid' ? 'is-active' : ''}
              onClick={() => setView('grid')}
              aria-label="عرض شبكي"
            >
              <i className="fa-solid fa-table-cells-large"></i>
            </button>
            <button
              type="button"
              className={view === 'list' ? 'is-active' : ''}
              onClick={() => setView('list')}
              aria-label="عرض قائمة"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        {current.length > 0 ? (
          <div className={`bp-grid ${view === 'list' ? 'is-list' : ''}`}>
            {current.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="bp-card">
                <div className="bp-img">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="bp-badge">{post.category}</span>
                </div>

                <div className="bp-content">
                  <div>
                    <div className="bp-meta">
                      <i className="fa-regular fa-clock" aria-hidden="true"></i>
                      <span>{post.readTime}</span>
                      <span className="bp-dot">•</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="bp-title">{post.title}</h3>
                    <p className="bp-excerpt">{post.excerpt}</p>
                  </div>

                  <div className="bp-foot">
                    <div className="bp-author">
                      <img src={post.author.avatar} alt={post.author.name} />
                      <div>
                        <strong>{post.author.name}</strong>
                        <small>{post.author.role}</small>
                      </div>
                    </div>
                    <span className="bp-arrow" aria-hidden="true">
                      <i className="fa-solid fa-chevron-left"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bp-empty">لا توجد مقالات تطابق البحث أو التصنيف المحدد.</div>
        )}
        {totalPages > 1 && (
          <nav className="bp-pager" aria-label="الصفحات">
            <div className="bp-pages">
              <button
                type="button"
                className="bp-page"
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                aria-label="الصفحة السابقة"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`bp-page ${page === n ? 'is-active' : ''}`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}

              <button
                type="button"
                className="bp-page"
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                aria-label="الصفحة التالية"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>
            <p className="bp-pageinfo">
              صفحة {page} من {totalPages}
            </p>
          </nav>
        )}
      </div>
    </section>
  );
}