import {
  SiMicrosoftazure, SiAzuredevops, SiAzurepipelines,
  SiDotnet, SiCsharp, SiHtml5, SiCss3, SiTailwindcss, SiJavascript,
} from "react-icons/si";

const orange = "#ff6b00";
const border = "rgba(255,107,0,0.2)";
const borderDim = "rgba(255,107,0,0.08)";
const white = "#f0e8d8";
const dim = "rgba(240,232,216,0.45)";

const skills = [
  { icon: <SiMicrosoftazure />, name: "Azure", pct: 90 },
  { icon: <SiAzuredevops />, name: "Azure DevOps", pct: 88 },
  { icon: <SiAzurepipelines />, name: "Azure Pipelines", pct: 82 },
  { icon: <SiDotnet />, name: ".NET", pct: 92 },
  { icon: <SiCsharp />, name: "C#", pct: 92 },
  { icon: <SiJavascript />, name: "JavaScript", pct: 78 },
  { icon: <SiHtml5 />, name: "HTML5", pct: 80 },
  { icon: <SiCss3 />, name: "CSS3", pct: 76 },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", pct: 72 },
];

const experience = [
  {
    org: "Microsoft",
    role: "Software Engineer II",
    dates: "June 2018 – Present",
    desc: "Co-owned the 2nd most highly trafficked web services capable of handling 1M+ calls/month for external learning partners. Built APIs enabling upload/modification of course offerings on MS Learn, learner enrollment tracking, and onboarding of new learning partners — each with full CRUD operations. Wrote technical documentation and modernized legacy applications to meet accessibility standards.",
  },
  {
    org: "Microsoft Software & Systems Academy",
    role: "Cloud Applications Developer – Student",
    dates: "January 2018 – May 2018",
    desc: "Earned Microsoft Technology Associate (MTA 98-361) as a prerequisite for an 18-week program designed for transitioning military veterans. Mastered fundamentals of C#, T-SQL, and ASP.NET. Pair-programmed a console-based Space Invaders game.",
    link: { href: "https://military.microsoft.com/mssa/", label: "MSSA Program ↗" },
  },
  {
    org: "United States Navy",
    role: "Petty Officer 2nd Class – Aviation Electrician's Mate",
    dates: "June 2011 – February 2018",
    desc: "Active Duty specialist on C-130T Hercules and P3-C Orion aircraft. Qualified as a line-maintenance technician and Collateral Duty Inspector.",
  },
];

function SkillBar({ icon, name, pct }) {
  return (
    <div style={{
      padding: "16px 20px",
      border: `1px solid ${borderDim}`,
      transition: "border-color 0.3s",
      cursor: "default",
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = border}
      onMouseLeave={e => e.currentTarget.style.borderColor = borderDim}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <span style={{ color: orange, fontSize: "16px" }}>{icon}</span>
        <span style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(240,232,216,0.7)", textTransform: "uppercase" }}>{name}</span>
      </div>
      <div style={{ height: "2px", background: "rgba(255,107,0,0.1)", position: "relative", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${pct}%`,
          background: "linear-gradient(90deg, #cc4400, #ff6b00)",
          boxShadow: "0 0 8px rgba(255,107,0,0.7)",
          animation: "fillBar 1.5s ease-out forwards",
        }} />
      </div>
    </div>
  );
}

function ExpRow({ org, role, dates, desc, link, isLast }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gap: "32px",
      padding: "32px 0",
      borderBottom: isLast ? "none" : `1px solid ${borderDim}`,
    }}>
      <div>
        <div style={{ fontSize: "9px", letterSpacing: "3px", color: orange, textTransform: "uppercase", marginBottom: "6px" }}>{dates}</div>
        <div style={{ fontSize: "11px", letterSpacing: "1px", color: dim }}>{org}</div>
      </div>
      <div>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "18px", fontWeight: 600, color: white, letterSpacing: "1px", marginBottom: "10px" }}>{role}</div>
        <p style={{ fontSize: "11px", lineHeight: 1.9, color: dim, marginBottom: link ? "12px" : 0 }}>{desc}</p>
        {link && (
          <a href={link.href} target="_blank" rel="noreferrer"
            style={{ fontSize: "9px", letterSpacing: "3px", color: orange, textDecoration: "none", borderBottom: `1px solid rgba(255,107,0,0.3)`, paddingBottom: "2px" }}>
            {link.label}
          </a>
        )}
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div id="resume" style={{ position: "relative", zIndex: 10, padding: "100px 80px", borderBottom: `1px solid ${border}` }}>

      {/* Section header */}
      <div className="sec-hdr">
        <span className="sec-num">01 //</span>
        <div className="sec-line" />
        <h2 className="sec-title">RESUME</h2>
      </div>

      {/* Skills */}
      <p style={{ fontSize: "9px", letterSpacing: "4px", color: orange, textTransform: "uppercase", marginBottom: "20px" }}>{"// Skills & Technologies"}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", marginBottom: "80px" }}>
        {skills.map(s => <SkillBar key={s.name} {...s} />)}
      </div>

      {/* Experience */}
      <p style={{ fontSize: "9px", letterSpacing: "4px", color: orange, textTransform: "uppercase", marginBottom: "8px" }}>{"// Experience"}</p>
      <div style={{ borderTop: `1px solid ${borderDim}` }}>
        {experience.map((exp, i) => (
          <ExpRow key={exp.org} {...exp} isLast={i === experience.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default Resume;
