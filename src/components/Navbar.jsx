import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const getLinkStyle = ({ isActive }) => ({
    fontSize: '13px',
    backgroundColor: isActive ? '#ff5c00' : 'transparent',
    color: isActive ? '#ffffff' : '#8c8c8c',
    transition: 'all 0.3s ease',
  });

  return (
    <nav 
      className="navbar navbar-expand-lg d-flex justify-content-between align-items-center py-3 px-4 border-bottom border-secondary border-opacity-10 custom-navbar" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#0c0c0e',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="d-flex align-items-center gap-2">
        <div 
          className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
          style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255, 92, 0, 0.15)', color: '#ff5c00', border: '1px solid #ff5c00' }}
        >
          <img 
            src={logoImg} 
            alt="عدسة Logo" 
            style={{ width: '40px', height: '40px', objectFit: 'contain' }} 
          />
        </div>
        <div>
          <h5 className="mb-0 fw-bold text-white">عدسة</h5>
          <small className="text-secondary" style={{ fontSize: '11px' }}>عالم التصوير الفوتوغرافي</small>
        </div>
      </div>
      <div 
        className="d-none d-md-flex align-items-center gap-1 px-2 py-1 rounded-pill" 
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <NavLink 
          to="/" 
          className="px-3 py-1 rounded-pill text-decoration-none fw-semibold"
          style={getLinkStyle}
        >
          الرئيسية
        </NavLink>

        <NavLink 
          to="/blog" 
          className="px-3 py-1 rounded-pill text-decoration-none fw-semibold"
          style={getLinkStyle}
        >
          المدونة
        </NavLink>

        <NavLink 
          to="/about" 
          className="px-3 py-1 rounded-pill text-decoration-none fw-semibold"
          style={getLinkStyle}
        >
          من نحن
        </NavLink>
      </div>
      <div className="d-flex align-items-center gap-3">
        <span className="text-secondary" style={{ cursor: 'pointer' }}>🔍</span>
        <button className="btn fw-bold px-4 py-2 rounded-pill text-white" style={{ backgroundColor: '#ff5c00', fontSize: '14px', border: 'none' }}>
          ابدأ القراءة
        </button>
      </div>
    </nav>
  );
}