import { useState, type CSSProperties } from "react";

const navLinks = ["Home", "About Us", "Our App", "Contacts"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <div style={styles.logo}>
        <img src="/logo.png" alt="Epixelab Logo" style={{ height: "40px", width: "auto" }} />
      </div>

      {/* Nav Links - Desktop */}
      <ul style={styles.navLinks} className="desktop-nav-links">
        {navLinks.map((link) => (
          <li key={link}>
            <button
              onClick={() => setActive(link)}
              style={{
                ...styles.navLink,
                ...(active === link ? styles.navLinkActive : {}),
              }}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* Auth Buttons - Desktop */}
      <div style={styles.authButtons} className="desktop-auth-buttons">
        <button style={styles.loginBtn}>Log in</button>
        <button style={styles.signupBtn}>Sign up</button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={styles.mobileMenuBtn}
        className="mobile-menu-btn"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
          <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
          <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <ul style={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => {
                    setActive(link);
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    ...styles.mobileNavLink,
                    ...(active === link ? styles.mobileNavLinkActive : {}),
                  }}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <div style={styles.mobileAuthButtons}>
            <button style={styles.mobileLoginBtn}>Log in</button>
            <button style={styles.mobileSignupBtn}>Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
}

const styles: Record<string, CSSProperties> = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    height: "68px",
    backgroundColor: "#ffffff",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    borderBottom: "1px solid #f0f0f0",
    boxSizing: "border-box",
    position: "relative",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    minWidth: "120px",
  },
  logoAccent: {
    color: "#F26419",
    fontStyle: "italic",
  },
  logoBlack: {
    color: "#111111",
    fontWeight: 400,
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "36px",
    flex: 1,
    justifyContent: "center",
  },
  navLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    color: "#333333",
    fontWeight: 400,
    fontFamily: "inherit",
    padding: 0,
    letterSpacing: "0.01em",
    transition: "color 0.15s",
  },
  navLinkActive: {
    fontWeight: 700,
    color: "#111111",
  },
  authButtons: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  loginBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    color: "#333333",
    fontFamily: "inherit",
    fontWeight: 400,
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "color 0.15s",
    whiteSpace: "nowrap",
  },
  signupBtn: {
    background: "#F26419",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontFamily: "inherit",
    fontWeight: 600,
    padding: "10px 22px",
    borderRadius: "8px",
    transition: "background 0.15s",
    whiteSpace: "nowrap",
  },

  /* Mobile Menu */
  mobileMenuBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#333333",
    padding: "8px",
    fontSize: "24px",
  },
  mobileMenu: {
    position: "absolute",
    top: "68px",
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #f0f0f0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    zIndex: 1000,
    padding: "16px 20px",
  },
  mobileNavLinks: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    margin: "0 0 16px 0",
    padding: 0,
    gap: "12px",
  },
  mobileNavLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    color: "#333333",
    fontWeight: 400,
    fontFamily: "inherit",
    padding: "8px 0",
    letterSpacing: "0.01em",
    transition: "color 0.15s",
    textAlign: "left",
  },
  mobileNavLinkActive: {
    fontWeight: 700,
    color: "#F26419",
  },
  mobileAuthButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    borderTop: "1px solid #f0f0f0",
    paddingTop: "12px",
  },
  mobileLoginBtn: {
    background: "none",
    border: "1px solid #F26419",
    cursor: "pointer",
    fontSize: "15px",
    color: "#F26419",
    fontFamily: "inherit",
    fontWeight: 600,
    padding: "10px 16px",
    borderRadius: "8px",
    transition: "all 0.15s",
  },
  mobileSignupBtn: {
    background: "#F26419",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontFamily: "inherit",
    fontWeight: 600,
    padding: "10px 16px",
    borderRadius: "8px",
    transition: "background 0.15s",
  },
};