import React from 'react';
import { Link } from 'react-router-dom';
import postsData from '../posts.json';
import '../About.css';
const stats = [
  { id: 1, icon: 'fa-solid fa-users', value: '2+ مليون', label: 'قارئ شهرياً' },
  { id: 2, icon: 'fa-solid fa-newspaper', value: '500+', label: 'مقالة منشورة' },
  { id: 3, icon: 'fa-solid fa-pen-nib', value: '50+', label: 'كاتب خبير' },
  { id: 4, icon: 'fa-solid fa-book-open', value: '15+', label: 'تصنيف' },
];

const values = [
  { id: 1, icon: 'fa-solid fa-bullseye', title: 'الجودة أولاً', text: 'محتوى مدروس ومكتوب بخبرة' },
  { id: 2, icon: 'fa-solid fa-bolt', title: 'تركيز عملي', text: 'أمثلة واقعية يمكنك تطبيقها اليوم' },
  { id: 3, icon: 'fa-solid fa-handshake', title: 'المجتمع', text: 'تعلم مع آلاف المصورين' },
  { id: 4, icon: 'fa-solid fa-arrows-rotate', title: 'دائماً محدث', text: 'أحدث الاتجاهات وأفضل الممارسات' },
];
const authors = (() => {
  const seen = new Set();
  const list = [];
  postsData.posts.forEach((p) => {
    if (!seen.has(p.author.name)) {
      seen.add(p.author.name);
      list.push(p.author);
    }
  });
  return list;
})();

export default function About() {
  return (
    <>
    <section className="ab-hero" dir="rtl">
      <div className="ab-glow"></div>

      <div className="container ab-inner">
        <div className="ab-badge">
          <span className="ab-dots">● ●</span>
          <span className="ab-badge-text">من نحن</span>
        </div>

        <h1 className="ab-title">
          مهمتنا هي <span className="ab-accent">الإعلام والإلهام</span>
        </h1>

        <p className="ab-text">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية
          لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من
          خلال محتوى عالي الجودة.
        </p>

        <div className="ab-stats">
          {stats.map((s) => (
            <div key={s.id} className="ab-stat">
              <i className={s.icon} aria-hidden="true"></i>
              <strong dir="ltr">{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="ab-values" dir="rtl">
      <div className="container">
        <h2 className="ab-h2">
          <span className="ab-bar"></span>
          قيمنا
          <span className="ab-bar"></span>
        </h2>
        <p className="ab-sub">المبادئ التي توجه كل ما نقوم بإنشائه</p>

        <div className="ab-values-grid">
          {values.map((v) => (
            <div key={v.id} className="ab-value">
              <i className={v.icon} aria-hidden="true"></i>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="ab-team" dir="rtl">
      <div className="container">
        <div className="ab-badge ab-badge-sm">
          <span className="ab-dots">●</span>
          <span className="ab-badge-text">فريقنا</span>
        </div>
        <h2 className="ab-h2 ab-h2-plain">تعرف على كتابنا</h2>
        <p className="ab-sub">
          فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
        </p>

        <div className="ab-team-grid">
          {authors.map((a) => (
            <div key={a.name} className="ab-author">
              <div className="ab-avatar">
                <img src={a.avatar.replace('w=100&h=100', 'w=240&h=240')} alt={a.name} loading="lazy" />
                <span className="ab-check"><i className="fa-solid fa-check"></i></span>
              </div>
              <h3>{a.name}</h3>
              <span className="ab-role">{a.role}</span>
              <div className="ab-social">
                <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="#" aria-label="X">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="ab-cta" dir="rtl">
      <div className="container">
        <h2>لديك أسئلة؟ دعنا نتحدث!</h2>
        <p>
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء
          التحية. لا تتردد في التواصل.
        </p>
        <div className="ab-cta-btns">
          <a href={`mailto:${postsData.siteInfo.email}`} className="ab-btn ab-btn-dark">
            <i className="fa-regular fa-envelope" aria-hidden="true"></i>
            تواصل معنا
          </a>
          <Link to="/blog" className="ab-btn ab-btn-light">تصفح المقالات</Link>
        </div>
      </div>
    </section>
    </>
  );
}