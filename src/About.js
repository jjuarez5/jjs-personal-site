import { SiLinkedin, SiGithub } from "react-icons/si";

function calculateExperience() {
  var today = new Date().getFullYear();
  return Math.abs(today - 2018);
}

const s = {
  section: {
    position: "relative",
    zIndex: 10,
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    borderBottom: "1px solid rgba(255,107,0,0.15)",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px 48px 80px 80px",
    borderRight: "1px solid rgba(255,107,0,0.15)",
    animation: "fadeUp 0.6s 0.2s ease both",
  },
  tag: {
    fontSize: "9px",
    letterSpacing: "4px",
    color: "#ff6b00",
    textTransform: "uppercase",
    marginBottom: "20px",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  name: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "clamp(48px, 6vw, 80px)",
    fontWeight: 700,
    lineHeight: 0.9,
    letterSpacing: "-1px",
    color: "#f0e8d8",
    marginBottom: "12px",
  },
  nameAccent: {
    color: "#ff6b00",
    textShadow: "0 0 15px rgba(255,107,0,0.6), 0 0 30px rgba(255,107,0,0.3)",
  },
  subtitle: {
    fontSize: "11px",
    letterSpacing: "5px",
    color: "rgba(240,232,216,0.45)",
    textTransform: "uppercase",
    marginBottom: "28px",
  },
  desc: {
    fontSize: "12px",
    lineHeight: 2,
    color: "rgba(240,232,216,0.5)",
    maxWidth: "440px",
    marginBottom: "36px",
  },
  socials: {
    display: "flex",
    gap: "16px",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "10px",
    letterSpacing: "2px",
    color: "rgba(255,107,0,0.5)",
    textDecoration: "none",
    textTransform: "uppercase",
    transition: "color 0.3s",
    border: "1px solid rgba(255,107,0,0.2)",
    padding: "8px 14px",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px 80px 80px 48px",
    animation: "slideInRight 0.8s 0.5s ease both",
  },
  idCard: {
    border: "1px solid rgba(255,107,0,0.2)",
    background: "rgba(20,10,3,0.8)",
    padding: "32px",
    position: "relative",
  },
  idCardLabel: {
    position: "absolute",
    top: "-10px",
    left: "20px",
    background: "#080502",
    padding: "0 10px",
    fontSize: "8px",
    letterSpacing: "3px",
    color: "#ff6b00",
    fontFamily: "'IBM Plex Mono', monospace",
    textTransform: "uppercase",
  },
  idHeader: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
    marginBottom: "24px",
    paddingBottom: "20px",
    borderBottom: "1px solid rgba(255,107,0,0.15)",
  },
  avatar: {
    width: "72px",
    height: "72px",
    border: "1px solid #ff6b00",
    background: "linear-gradient(135deg, rgba(255,107,0,0.1), transparent)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "30px",
    fontWeight: 700,
    color: "#ff6b00",
    boxShadow: "0 0 8px rgba(255,107,0,0.7)",
    flexShrink: 0,
  },
  idName: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "22px",
    fontWeight: 700,
    color: "#f0e8d8",
    letterSpacing: "2px",
    lineHeight: 1,
    marginBottom: "6px",
  },
  idRole: {
    fontSize: "9px",
    letterSpacing: "3px",
    color: "#ff6b00",
    textTransform: "uppercase",
  },
  barcode: {
    marginTop: "8px",
    height: "20px",
    background: `repeating-linear-gradient(
      90deg,
      #ff6b00 0, #ff6b00 2px,
      transparent 2px, transparent 4px,
      #ff6b00 4px, #ff6b00 5px,
      transparent 5px, transparent 8px,
      #ff6b00 8px, #ff6b00 11px,
      transparent 11px, transparent 14px,
      #ff6b00 14px, #ff6b00 15px,
      transparent 15px, transparent 18px
    )`,
    opacity: 0.25,
  },
  idFields: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  fieldLabel: {
    fontSize: "8px",
    letterSpacing: "2px",
    color: "rgba(255,107,0,0.5)",
    textTransform: "uppercase",
    marginBottom: "3px",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  fieldValue: {
    fontSize: "12px",
    color: "#f0e8d8",
  },
  statusRow: {
    marginTop: "20px",
    paddingTop: "16px",
    borderTop: "1px solid rgba(255,107,0,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusBadge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "9px",
    letterSpacing: "2px",
    color: "rgba(0,255,136,0.8)",
  },
  statusDot: {
    width: "6px",
    height: "6px",
    background: "rgba(0,255,136,0.8)",
    borderRadius: "50%",
    animation: "statusBlink 2s infinite",
    boxShadow: "0 0 6px rgba(0,255,136,0.8)",
  },
  statusId: {
    fontSize: "8px",
    letterSpacing: "2px",
    color: "rgba(255,107,0,0.35)",
    fontFamily: "'IBM Plex Mono', monospace",
  },
};

function About() {
  return (
    <div id="home" style={s.section}>
      {/* LEFT */}
      <div style={s.left}>
        <p style={s.tag}>▸ Portfolio / v2.0 / Online</p>
        <h1 style={s.name}>
          JULIO<br />
          <span style={s.nameAccent}>"JJ" JUAREZ</span>
        </h1>
        <p style={s.subtitle}>Software Engineer</p>
        <p style={s.desc}>
          {calculateExperience()}+ years building cloud-hosted web services and APIs
          at Microsoft. Back-end specialist who ships clean, scalable systems
          and mentors veterans breaking into tech.
        </p>
        <div style={s.socials}>
          <a href="https://github.com/jjuarez5" target="_blank" rel="noreferrer"
            style={s.socialLink}
            onMouseEnter={e => e.currentTarget.style.color = "#ff6b00"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,107,0,0.5)"}>
            <SiGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/juliojuarez713/" target="_blank" rel="noreferrer"
            style={s.socialLink}
            onMouseEnter={e => e.currentTarget.style.color = "#ff6b00"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,107,0,0.5)"}>
            <SiLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      {/* RIGHT — ID Card */}
      <div style={s.right}>
        <div style={s.idCard}>
          <span style={s.idCardLabel}>IDENTITY VERIFIED</span>

          <div style={s.idHeader}>
            <div style={s.avatar}>JJ</div>
            <div>
              <div style={s.idName}>JULIO JUAREZ</div>
              <div style={s.idRole}>Software Engineer II · Microsoft</div>
              <div style={s.barcode} />
            </div>
          </div>

          <div style={s.idFields}>
            <div>
              <div style={s.fieldLabel}>Location</div>
              <div style={s.fieldValue}>Remote / USA</div>
            </div>
            <div>
              <div style={s.fieldLabel}>Status</div>
              <div style={s.fieldValue}>Available</div>
            </div>
            <div>
              <div style={s.fieldLabel}>Primary Stack</div>
              <div style={s.fieldValue}>C# · .NET · Azure</div>
            </div>
            <div>
              <div style={s.fieldLabel}>Experience</div>
              <div style={s.fieldValue}>{calculateExperience()}+ Years</div>
            </div>
            <div>
              <div style={s.fieldLabel}>Background</div>
              <div style={s.fieldValue}>US Navy Veteran</div>
            </div>
            <div>
              <div style={s.fieldLabel}>Focus</div>
              <div style={s.fieldValue}>APIs · Cloud · Web</div>
            </div>
          </div>

          <div style={s.statusRow}>
            <div style={s.statusBadge}>
              <div style={s.statusDot} />
              SYSTEM ACTIVE
            </div>
            <div style={s.statusId}>ID: JJ-2024-001</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
