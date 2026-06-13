import type { CSSProperties } from "react";

export default function EpixeLabHero() {
  return (
    <section style={styles.section}>
      {/* Left: Text content */}
      <div style={styles.left}>
        <h1 style={styles.heading}>
          We boost growth for your statup business
        </h1>
        <p style={styles.subtext}>
          Our goal is top at the heart of creativity services industry as a
          digital creator. In has a after comment
        </p>
        <div style={styles.actions}>
          <button style={styles.ctaBtn}>Get Started</button>
          <button style={styles.learnBtn}>
            <span style={styles.playCircle}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="5,3 13,8 5,13" fill="#333" />
              </svg>
            </span>
            <span style={styles.learnText}>Learn More</span>
          </button>
        </div>
      </div>

      {/* Right: Image + floating cards */}
      <div style={styles.right}>
        <div style={styles.imagePlaceholder}>
          {/* Relative wrapper: all absolute images position relative to this */}
          <div style={styles.heroImageWrapper}>
            <img
              src="/joyful.png"
              alt="Joyful"
              style={styles.joyfulImg}
            />

            <img
              src="/Group 7.png"
              alt="Group 7"
              style={styles.group7Img}
            />

            <img
              src="/Light.png"
              alt="Light"
              style={styles.lightImg}
            />

            <img
              src="/Group 4.png"
              alt="Group 4"
              style={styles.group4Img}
            />

            <img
              src="/Arrow.png"
              alt="Arrow"
              style={styles.arrowImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "clamp(30px, 8vw, 60px) clamp(20px, 6vw, 80px)",
    backgroundColor: "#ffffff",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    minHeight: "clamp(400px, 100vh, 600px)",
    boxSizing: "border-box",
    gap: "clamp(20px, 5vw, 40px)",
    overflow: "hidden",
    flexWrap: "wrap",
  },

  left: {
    flex: "0 0 45%",
    maxWidth: "520px",
    /* Tablet */
    minWidth: "300px",
  },
  heading: {
    fontSize: "clamp(28px, 5vw, 56px)",
    fontWeight: 800,
    color: "#0d1b3e",
    lineHeight: 1.1,
    margin: "0 0 24px 0",
    letterSpacing: "-1px",
  },
  subtext: {
    fontSize: "clamp(13px, 2vw, 15px)",
    color: "#555555",
    lineHeight: 1.7,
    margin: "0 0 40px 0",
    maxWidth: "460px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    flexWrap: "wrap",
  },
  ctaBtn: {
    backgroundColor: "#F26419",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    fontSize: "clamp(13px, 2vw, 15px)",
    fontWeight: 600,
    fontFamily: "inherit",
    padding: "14px 32px",
    borderRadius: "10px",
    transition: "background 0.15s",
    whiteSpace: "nowrap",
  },
  learnBtn: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    padding: 0,
  },
  playCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "3px solid #F26419",
    backgroundColor: "#fff",
    flexShrink: 0,
  },
  learnText: {
    fontSize: "clamp(13px, 2vw, 15px)",
    fontWeight: 700,
    color: "#111111",
  },

  /* Right */
  right: {
    flex: "0 0 50%",
    position: "relative",
    height: "clamp(300px, 60vw, 520px)",
    minWidth: "280px",
    minHeight: "300px",
  },
  imagePlaceholder: {
    position: "absolute",
    right: "0",
    top: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    border: "2px solid #cce0ff",
    borderRadius: "12px",
    backgroundColor: "rgba(255,255,255,0.3)",
    overflow: "visible",
  },

  heroImageWrapper: {
    position: "relative",
    width: "clamp(280px, 90vw, 606px)",
    height: "auto",
    aspectRatio: "606/618",
    maxWidth: "100%",
  },

  joyfulImg: {
    position: "relative",
    width: "100%",
    height: "auto",
    zIndex: 1,
    maxWidth: "100%",
  },

  group7Img: {
    position: "absolute",
    top: "clamp(5%, 10%, 15%)",
    left: "clamp(-50%, -30%, -10%)",
    width: "clamp(250px, 50vw, 475px)",
    height: "auto",
    aspectRatio: "475/273",
    zIndex: 2,
    maxWidth: "90vw",
    objectFit: "contain",
  },
  lightImg: {
    position: "absolute",
    top: "clamp(25%, 35%, 45%)",
    left: "clamp(-50%, -25%, -10%)",
    width: "clamp(180px, 35vw, 329.58px)",
    height: "auto",
    aspectRatio: "329.58/230.31",
    transform: "rotate(350deg)",
    zIndex: 2,
    maxWidth: "85vw",
    objectFit: "contain",
  },
  group4Img: {
    position: "absolute",
    top: "clamp(65%, 78%, 85%)",
    left: "clamp(-55%, -35%, -10%)",
    width: "clamp(250px, 50vw, 475px)",
    height: "auto",
    aspectRatio: "475/273",
    zIndex: 2,
    maxWidth: "90vw",
    objectFit: "contain",
  },
  arrowImg: {
    position: "absolute",
    top: "clamp(10%, 20%, 30%)",
    left: "clamp(50%, 65%, 75%)",
    width: "clamp(120px, 30vw, 229.58px)",
    height: "auto",
    aspectRatio: "229.58/230.31",
    transform: "rotate(10deg)",
    zIndex: 2,
    maxWidth: "70vw",
    objectFit: "contain",
  },
};