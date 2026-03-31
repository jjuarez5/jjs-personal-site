import AnchorLink from "react-anchor-link-smooth-scroll";

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(8,5,2,0.92)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,107,0,0.2)",
  },
  idBox: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
  },
  idSquare: {
    width: "36px",
    height: "36px",
    border: "1px solid #ff6b00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#ff6b00",
    boxShadow: "0 0 8px rgba(255,107,0,0.7)",
    flexShrink: 0,
  },
  idText: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: "4px",
    color: "#f0e8d8",
    textTransform: "uppercase",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: "10px",
    letterSpacing: "3px",
    color: "rgba(240,232,216,0.5)",
    textDecoration: "none",
    textTransform: "uppercase",
    transition: "color 0.3s",
  },
  ctaWrap: {
    position: "relative",
    display: "inline-block",
  },
  cta: {
    border: "1px solid #ff6b00",
    padding: "7px 18px",
    fontSize: "9px",
    letterSpacing: "3px",
    color: "#ff6b00",
    textDecoration: "none",
    textTransform: "uppercase",
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: 600,
    display: "inline-block",
    transition: "all 0.3s",
    background: "transparent",
  },
};

function Header() {
  return (
    <nav style={styles.nav} className="px-4 md:px-12">
      <AnchorLink href="#home" style={styles.idBox}>
        <div style={styles.idSquare}>J</div>
        <span style={styles.idText} className="hidden sm:inline">Julio Juarez</span>
      </AnchorLink>

      <div style={styles.navRight} className="gap-4 md:gap-8">
        <AnchorLink href="#resume" style={styles.link}
          onMouseEnter={e => { e.target.style.color = "#ff6b00"; e.target.style.textShadow = "0 0 8px rgba(255,107,0,0.7)"; }}
          onMouseLeave={e => { e.target.style.color = "rgba(240,232,216,0.5)"; e.target.style.textShadow = "none"; }}>
          Resume
        </AnchorLink>
        <AnchorLink href="#portfolio" style={styles.link}
          onMouseEnter={e => { e.target.style.color = "#ff6b00"; e.target.style.textShadow = "0 0 8px rgba(255,107,0,0.7)"; }}
          onMouseLeave={e => { e.target.style.color = "rgba(240,232,216,0.5)"; e.target.style.textShadow = "none"; }}>
          Portfolio
        </AnchorLink>
        <AnchorLink href="#contact"
          style={{...styles.cta}}
          onMouseEnter={e => { e.target.style.background = "#ff6b00"; e.target.style.color = "#080502"; e.target.style.boxShadow = "0 0 15px rgba(255,107,0,0.6), 0 0 30px rgba(255,107,0,0.3)"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#ff6b00"; e.target.style.boxShadow = "none"; }}>
          Contact
        </AnchorLink>
      </div>
    </nav>
  );
}

export default Header;
