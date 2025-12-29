import React, { useState, useEffect } from "react";
import "../styles/navBar.css";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-left">
          <div className="logo">
            <span className="logo-mark" aria-hidden />
            <div className="logo-text">
              <strong>Konukko</strong>
            </div>
          </div>

          <nav className="nav-menu" aria-label="Primary">
            <ul>
              <li>Home</li>
              <li>About Us</li>

              <li className={`has-submenu ${pagesOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="submenu-toggle"
                  aria-haspopup="true"
                  aria-expanded={pagesOpen}
                  onMouseOver={() => setPagesOpen((s) => !s)}
                >
                  Pages <span className="caret">▾</span>
                </button>

                <ul className="submenu" aria-label="Pages" hidden={!pagesOpen}>
                  <li>Shop</li>
                  <li>Cart</li>
                  <li>WishList</li>
                  <li>Wallet</li>
                </ul>
              </li>

              <li>Contact us</li>
            </ul>
          </nav>
        </div>

        <div className="nav-center">
          <div className="search">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
            <input type="search" placeholder="Search for products..." />
          </div>
        </div>

        <div className="nav-right">
          <button className="icon-btn" aria-label="Profile">
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button className="icon-btn with-badge" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M12.1 21s-7.6-4.9-9.4-8.2C.9 9.7 4.1 5 8.6 5c2.4 0 3.9 1.4 3.9 1.4S15 5 17.4 5C21.9 5 25.1 9.7 21.3 12.8 19.5 15.1 12.1 21 12.1 21z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" />
            </svg>
            <span className="badge">0</span>
          </button>

          <button className="icon-btn with-badge" aria-label="Cart">
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M6 6h15l-1.6 9.3A2 2 0 0 1 17.5 17H9.2a2 2 0 0 1-1.9-1.5L5 3H2" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="20" r="1" fill="currentColor" /><circle cx="18" cy="20" r="1" fill="currentColor" />
            </svg>
            <span className="badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
