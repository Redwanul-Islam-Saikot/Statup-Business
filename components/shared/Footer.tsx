import type { CSSProperties } from "react";

const footerLinks = ["Portfolio", "How it Works", "Pricing", "About", "Login"];

export default function Footer() {
  return (
    <footer style={styles.wrapper}>
      {/* Top row */}
      <div style={styles.topRow}>
        {/* Logo */}
        <div style={styles.logo}>
          <img src="/logo.png" alt="Epixelab Logo" style={{ height: "23px", width: "111px" }} />
        </div>

        {/* Copyright */}
        <p style={styles.copyright}>© 2020 Epixelab. All rights reserved.</p>

        {/* Nav links */}
        <nav>
          <ul style={styles.navLinks}>
            {footerLinks.map((link) => (
              <li key={link}>
                <a href="#" style={styles.navLink}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Divider */}
      <hr style={styles.divider} />

      {/* Tagline */}
      <p style={styles.tagline}>
        Startup Framework contains components and complex blocks which can
        easily be integrated into almost any design.
      </p>
    </footer>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    padding: "24px 20px 32px",
    backgroundColor: "#ffffff",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    boxSizing: "border-box",
    width: "100%",
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
    marginBottom: "20px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    minWidth: "100px",
  },
  logoAccent: {
    color: "#F26419",
    fontStyle: "italic",
  },
  logoBlack: {
    color: "#111111",
    fontWeight: 400,
  },
  copyright: {
    margin: 0,
    fontSize: "clamp(12px, 2vw, 14px)",
    color: "#444444",
    fontWeight: 400,
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "clamp(16px, 3vw, 28px)",
    flexWrap: "wrap",
  },
  navLink: {
    fontSize: "clamp(12px, 2vw, 14px)",
    color: "#222222",
    textDecoration: "none",
    fontWeight: 400,
    letterSpacing: "0.01em",
    transition: "color 0.15s",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e8e8e8",
    margin: "0 0 20px 0",
  },
  tagline: {
    margin: 0,
    fontSize: "clamp(12px, 2vw, 13px)",
    color: "#aaaaaa",
    fontWeight: 400,
    lineHeight: 1.6,
    maxWidth: "640px",
  },
};