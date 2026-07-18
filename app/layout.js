'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [darkBg, setDarkBg] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    document.body.classList.remove('no-scroll');
  }, [pathname]);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Scrolled past hero?
      setScrolled(currentScrollY > 80);

      // Dark background sections detection
      const darkSections = document.querySelectorAll('.section-dark, .site-footer');
      let onDark = false;
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < 120 && rect.bottom > 0) {
          onDark = true;
        }
      });
      setDarkBg(onDark);

      // Hide/show on scroll direction
      if (currentScrollY > heroHeight * 0.6) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveals
  useEffect(() => {
    // Small delay to ensure DOM is updated after navigation
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      const revealElements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      );

      revealElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, 50); // Small delay for DOM update

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run on every page navigation

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('no-scroll', !menuOpen);
  };

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const headerClass = [
    'site-header',
    scrolled ? 'scrolled' : '',
    hidden ? 'hidden' : '',
    darkBg ? 'dark-bg' : '',
  ].filter(Boolean).join(' ');

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header className={headerClass}>
          <div className="header-inner">
            <Link href="/" className="logo" aria-label="NANO HOME — Accueil">
              <img
                src="/images/logo-nano-home.png"
                alt="NANO HOME"
                className="header-logo"
              />
            </Link>

            <nav className="nav-desktop">
              <Link href="/" className={isActive('/') && pathname === '/' ? 'active' : ''}>
                Accueil
              </Link>
              <Link href="/nano-s1" className={isActive('/nano-s1') ? 'active' : ''}>
                Nano S1
              </Link>
              <Link href="/concept" className={isActive('/concept') ? 'active' : ''}>
                Concept
              </Link>
              <Link href="/produit" className={isActive('/produit') ? 'active' : ''}>
                Nos capsules
              </Link>
              <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact
              </Link>
            </nav>

            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
              <Link href="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
              <Link href="/nano-s1" onClick={() => setMenuOpen(false)}>Nano S1</Link>
              <Link href="/concept" onClick={() => setMenuOpen(false)}>Concept</Link>
              <Link href="/produit" onClick={() => setMenuOpen(false)}>Nos capsules</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </header>

        <main style={{ flex: 1, paddingTop: 0 }}>
          {children}
        </main>

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              N<span className="lamda">Λ</span>NO <span style={{ color: 'var(--orange)' }}>HOME</span>
            </div>
            <div className="footer-links">
              <Link href="/">Accueil</Link>
              <Link href="/nano-s1">Nano S1</Link>
              <Link href="/concept">Concept</Link>
              <Link href="/produit">Nos capsules</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <p className="footer-sig">L&apos;intelligence de l&apos;espace.</p>
            <p className="footer-copy">© {new Date().getFullYear()} NANO HOME</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
