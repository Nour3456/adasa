import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import postsData from '../posts.json';
import '../PostDetail.css';

const fmt = (iso, withYear = true) =>
  new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric',
    month: 'long',
    ...(withYear ? { year: 'numeric' } : {}),
    timeZone: 'UTC',
  }).format(new Date(iso));

export default function PostDetail() {
  const { slug } = useParams();
  const { posts } = postsData;
  const post = posts.find((p) => p.slug === slug);
  const [active, setActive] = useState(0);
  const blocks = useMemo(() => {
    if (!post) return [];
    return post.content
      .split(/\n\n+/)
      .map((b) => b.trim())
      .filter(Boolean)
      .map((b) =>
        b.startsWith('## ') ? { type: 'h', text: b.slice(3).trim() } : { type: 'p', text: b }
      );
  }, [post]);

  const headings = blocks.filter((b) => b.type === 'h');
  const related = useMemo(() => {
    if (!post) return [];
    const others = posts.filter((p) => p.id !== post.id);
    return [
      ...others.filter((p) => p.category === post.category),
      ...others.filter((p) => p.category !== post.category),
    ].slice(0, 3);
  }, [post, posts]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(0);
  }, [slug]);
  useEffect(() => {
    const onScroll = () => {
      let idx = 0;
      document.querySelectorAll('.pd-h2').forEach((el, i) => {
        if (el.getBoundingClientRect().top <= 170) idx = i;
      });
      setActive(idx);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  const goTo = (i) =>
    document.getElementById(`sec-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (!post) {
    return (
      <section className="pd pd-missing" dir="rtl">
        <h1>المقال غير موجود</h1>
        <p>الرابط الذي فتحته لا يطابق أي مقال.</p>
        <Link to="/blog" className="pd-btn">العودة إلى المدونة</Link>
      </section>
    );
  }

  const heroImg = post.image.replace('w=800&h=400', 'w=1920&h=1080');
  let h = -1;

  return (
    <article className="pd" dir="rtl">
      <header
        className="pd-hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(12,12,14,.1) 0%, rgba(12,12,14,.55) 55%, #0c0c0e 100%), url(${heroImg})`,
        }}
      >
        <div className="container">
          <nav className="pd-crumbs" aria-label="مسار التنقل">
            <Link to="/" aria-label="الرئيسية"><i className="fa-solid fa-house"></i></Link>
            <i className="fa-solid fa-chevron-left pd-sep"></i>
            <Link to="/blog">المدونة</Link>
            <i className="fa-solid fa-chevron-left pd-sep"></i>
            <span>{post.category}</span>
          </nav>

          <div className="pd-meta">
            <span className="pd-cat">{post.category}</span>
            <span><i className="fa-regular fa-calendar"></i>{fmt(post.date)}</span>
            <span><i className="fa-regular fa-clock"></i>{post.readTime}</span>
          </div>

          <h1 className="pd-title">{post.title}</h1>

          <div className="pd-hero-author">
            <img src={post.author.avatar} alt={post.author.name} />
            <div>
              <strong>{post.author.name}</strong>
              <small>{post.author.role}</small>
            </div>
          </div>
        </div>
      </header>
      <div className="container pd-layout">
        <div className="pd-main">
          <blockquote className="pd-quote">“{post.excerpt}”</blockquote>

          {blocks.map((b, i) => {
            if (b.type === 'h') {
              h += 1;
              return (
                <h2 key={i} id={`sec-${h}`} className="pd-h2">
                  <span className="pd-icon-box pd-icon-solid"><i className="fa-solid fa-camera"></i></span>
                  {b.text}
                </h2>
              );
            }
            return <p key={i} className="pd-p">{b.text}</p>;
          })}

          <div className="pd-card pd-tags">
            <div className="pd-card-head">
              <span className="pd-icon-box"><i className="fa-solid fa-tags"></i></span>
              <h3>الوسوم</h3>
            </div>
            <div className="pd-tag-list">
              {(post.tags || []).map((t) => (
                <span key={t} className="pd-tag">#{t}</span>
              ))}
            </div>
          </div>

          <div className="pd-card pd-author">
            <img src={post.author.avatar} alt={post.author.name} />
            <div>
              <h4>{post.author.name}</h4>
              <p>{post.author.role} شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
            </div>
          </div>
        </div>

        <aside className="pd-side">
          <div className="pd-card">
            <div className="pd-card-head">
              <span className="pd-icon-box"><i className="fa-solid fa-list-ul"></i></span>
              <h3>محتويات المقال</h3>
            </div>
            <ul className="pd-toc">
              {headings.map((hd, i) => (
                <li key={i}>
                  <button type="button" className={active === i ? 'is-active' : ''} onClick={() => goTo(i)}>
                    <span className="pd-num">{i + 1}</span>
                    {hd.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pd-card pd-stats">
            <div className="pd-stat">
              <i className="fa-regular fa-clock"></i>
              <strong>{post.readTime}</strong>
              <span>وقت القراءة</span>
            </div>
            <div className="pd-stat">
              <i className="fa-regular fa-calendar"></i>
              <strong>{fmt(post.date, false)}</strong>
              <span>تاريخ النشر</span>
            </div>
          </div>

          <div className="pd-card pd-cta">
            <span className="pd-icon-box pd-icon-solid"><i className="fa-solid fa-camera-retro"></i></span>
            <h3>أعجبك المقال؟</h3>
            <p>اكتشف المزيد من الدروس والنصائح في عالم التصوير.</p>
            <Link to="/blog" className="pd-btn">تصفح المزيد</Link>
          </div>
        </aside>
      </div>
      <div className="container">
        <section className="pd-related">
          <div className="pd-related-head">
            <div className="pd-related-title">
              <span className="pd-icon-box"><i className="fa-solid fa-images"></i></span>
              <div>
                <h2>مقالات قد تعجبك</h2>
                <p>استكشف المزيد من المحتوى المميز</p>
              </div>
            </div>
            <Link to="/blog" className="pd-all">
              <i className="fa-solid fa-arrow-left"></i> عرض الكل
            </Link>
          </div>

          <div className="pd-rel-grid">
            {related.map((r) => (
              <Link key={r.id} to={`/blog/${r.slug}`} className="pd-rel-card">
                <div className="pd-rel-img">
                  <img src={r.image} alt={r.title} loading="lazy" />
                  <span className="pd-rel-badge">{r.category}</span>
                </div>
                <h3>{r.title}</h3>
                <div className="pd-rel-foot">
                  <span className="pd-rel-author">
                    <img src={r.author.avatar} alt={r.author.name} />
                    {r.author.name}
                  </span>
                  <span>{r.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
