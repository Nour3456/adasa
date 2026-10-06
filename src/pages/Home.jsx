import React from 'react';
import HeroContent from '../components/HeroContent';
import StatCard from '../components/StatCard';
import '../Home.css';
const statsData = [
  { id: 1, icon: 'fa-solid fa-newspaper', number: '+50', label: 'مقالة' },
  { id: 2, icon: 'fa-solid fa-users', number: '+10ألف', label: 'قارئ' },
  { id: 3, icon: 'fa-solid fa-folder-open', number: '4', label: 'تصنيفات' },
  { id: 4, icon: 'fa-solid fa-pen-nib', number: '6', label: 'كاتب' },
];

export default function Home() {
  return (
    <section className="hm-hero" dir="rtl">
      <div className="container">
        <HeroContent />

        <div className="hm-stats">
          {statsData.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}