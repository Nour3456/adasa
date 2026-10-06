import React from 'react';

export default function StatCard({ icon, number, label }) {
  return (
    <div className="hm-stat">
      <i className={icon} aria-hidden="true"></i>
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}