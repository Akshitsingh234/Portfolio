import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Social icons as SVGs (outlined, matching your screenshot)
const icons = {
  instagram: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="17.5" cy="6.5" r="1"/>
    </svg>
  ),
  linkedin: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.5"/>
      <path d="M7 10v7M7 7v.01M12 10v7m0 0v-4a2 2 0 1 1 4 0v4"/>
    </svg>
  ),
  github: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M12 17v-1.5c0-.4.2-.8.6-1 .6-.2 1.2-.4 1.2-1.2 0-.6-.5-1-1.2-1.2-.4-.2-.6-.6-.6-1V9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="8.5" r="1" fill="currentColor"/>
    </svg>
  ),
  twitter: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8 15c3.5 0 7-2.5 7-7v-.5A4.9 4.9 0 0 0 17 6a4.9 4.9 0 0 1-1.4.4A2.5 2.5 0 0 0 16.5 5a5 5 0 0 1-1.6.6A2.5 2.5 0 0 0 8 7.5c0 .2 0 .4.1.6A7.1 7.1 0 0 1 5 6.1s-.1.2-.1.5c0 .9.5 1.7 1.2 2.2A2.5 2.5 0 0 1 5 8.4v.1c0 1.3.9 2.4 2.1 2.7a2.5 2.5 0 0 1-1.1.1c.3.9 1.1 1.5 2.1 1.5A5 5 0 0 1 5 15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  medium: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.5"/>
      <path d="M7.5 8.5v7m0 0v-7m0 7h1.5l2-7 2 7h1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">Akshit</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLinks">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarLinks">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3">
            <li className="nav-item">
              <a className="nav-link icon-link instagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                {icons.instagram}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-link linkedin" href="https://www.linkedin.com/in/akshit-soni-8899a32a5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {icons.linkedin}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-link github" href="https://github.com/Akshitsingh234#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                {icons.github}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-link twitter" href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="X">
                {icons.twitter}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link icon-link medium" href="https://medium.com/@YOUR_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                {icons.medium}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
        .custom-navbar {
          background: linear-gradient(180deg, #181818 60%, #111 100%);
          box-shadow: 0 2px 24px 0 rgba(0,0,0,0.28);
          max-width: 90vw;
          margin: 0 auto 0 auto; /* Changed: remove top margin */
          border-radius: 0 0 8px 8px;
          padding-left: 2vw;
          padding-right: 2vw;
        }
        .navbar-brand {
          font-size: 2.5rem;
          letter-spacing: 2px;
          color: #fff !important;
          font-weight: 700;
        }
        .icon-link {
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: transparent;
          transition: border-color 0.3s, background 0.3s, box-shadow 0.3s, transform 0.3s;
          margin-left: 0.2rem;
          margin-right: 0.2rem;
        }
        .icon-link svg {
          color: #e0e0e0;
          transition: color 0.3s, transform 0.3s;
          width: 22px;
          height: 22px;
        }
        .icon-link:hover,
        .icon-link:focus {
          border-color: #fff;
          background: rgba(255,255,255,0.06);
          outline: none;
          box-shadow: 0 8px 24px 0 rgba(255,255,255,0.15), 0 2px 8px 0 rgba(0,0,0,0.18);
          transform: translateY(-8px) scale(1.08);
        }
        .icon-link:hover svg,
        .icon-link:focus svg {
          transform: scale(1.15);
        }
        .icon-link.instagram:hover svg { color: #e1306c; }
        .icon-link.linkedin:hover svg { color: #0077b5; }
        .icon-link.github:hover svg { color: #fff; }
        .icon-link.twitter:hover svg { color: #1da1f2; }
        .icon-link.medium:hover svg { color: #00ab6c; }
        @media (max-width: 991px) {
          .custom-navbar {
            max-width: 100vw;
            border-radius: 0;
            margin: 0;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .navbar-nav {
            gap: 1.2rem !important;
          }
          .icon-link {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </nav>
  );
}