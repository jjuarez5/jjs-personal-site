const orange = "#ff6b00";
const border = "rgba(255,107,0,0.2)";
const borderDim = "rgba(255,107,0,0.08)";
const white = "#f0e8d8";
const dim = "rgba(240,232,216,0.45)";

const projects = [
  {
    num: "01",
    name: "OpenAI FAQBot",
    desc: "An OpenAI-powered FAQ and chat bot built for my wife's hair business. Leveraged ChatGPT to answer common client questions about hair care, products, services, and pricing — saving real time every day.",
    tags: ["OpenAI", "ChatGPT", "C#", "SDK"],
    href: "https://github.com/jjuarez5/FAQBot",
  },
  {
    num: "02",
    name: "Space Explorer 1983",
    desc: "A text-based console game built as a pair-programming project during my MSSA Cohort. Described as 'The Oregon Trail, except better' — co-authored with Greg Wilson.",
    tags: ["C#", "Console App", "Game Dev"],
    href: "https://github.com/jjuarez5/Space-Explorer-Console-App-Game",
  },
  {
    num: "03",
    name: "TheManeAllure.com",
    desc: "Full website built with HTML5 & CSS3 for my wife's hair colorist business. Designed the layout and color scheme, then integrated an OpenAI virtual assistant to handle client inquiries.",
    tags: ["HTML5", "CSS3", "OpenAI", "UI Design"],
    href: "https://www.themaneallure.com",
  },
  {
    num: "04",
    name: "juliojuarez.io",
    desc: "This site — a digital resume and portfolio built with React.js and Tailwind CSS. A living project to showcase what I'm learning and how I ship.",
    tags: ["React", "Tailwind CSS", "Netlify"],
    href: "#home",
  },
];

function ProjectRow({ num, name, desc, tags, href, isLast }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr auto",
        alignItems: "center",
        gap: "32px",
        padding: "28px 32px",
        borderBottom: isLast ? "none" : `1px solid ${borderDim}`,
        background: "rgba(15,8,3,0.5)",
        transition: "background 0.3s, border-color 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(30,15,5,0.8)";
        e.currentTarget.style.borderColor = border;
        e.currentTarget.querySelector(".proj-num").style.color = orange;
        e.currentTarget.querySelector(".proj-num").style.textShadow = "0 0 8px rgba(255,107,0,0.7)";
        e.currentTarget.querySelector(".proj-arrow").style.color = orange;
        e.currentTarget.querySelector(".proj-arrow").style.transform = "translateX(4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(15,8,3,0.5)";
        e.currentTarget.style.borderColor = borderDim;
        e.currentTarget.querySelector(".proj-num").style.color = dim;
        e.currentTarget.querySelector(".proj-num").style.textShadow = "none";
        e.currentTarget.querySelector(".proj-arrow").style.color = "rgba(255,107,0,0.25)";
        e.currentTarget.querySelector(".proj-arrow").style.transform = "translateX(0)";
      }}
      onClick={() => window.open(href, href.startsWith("#") ? "_self" : "_blank", "noreferrer")}
    >
      {/* Number */}
      <div className="proj-num" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "2px", color: dim, transition: "color 0.3s, text-shadow 0.3s" }}>
        {num}
      </div>

      {/* Content */}
      <div>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "22px", fontWeight: 600, color: white, letterSpacing: "1px", marginBottom: "6px" }}>{name}</div>
        <p style={{ fontSize: "11px", lineHeight: 1.8, color: dim, marginBottom: "12px" }}>{desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {tags.map(t => (
            <span key={t} style={{
              fontSize: "8px", letterSpacing: "2px", textTransform: "uppercase",
              padding: "3px 8px", border: `1px solid ${borderDim}`, color: "rgba(255,107,0,0.5)",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="proj-arrow" style={{ color: "rgba(255,107,0,0.25)", fontSize: "20px", transition: "color 0.3s, transform 0.3s" }}>→</div>
    </div>
  );
}

function Portfolio() {
  return (
    <div id="portfolio" style={{ position: "relative", zIndex: 10, padding: "100px 80px", borderBottom: `1px solid ${border}` }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "60px" }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", letterSpacing: "4px", color: orange }}>02 //</span>
        <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${border}, transparent)` }} />
        <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, letterSpacing: "2px", color: white }}>PORTFOLIO</h2>
      </div>

      {/* Projects list */}
      <div style={{ border: `1px solid ${borderDim}`, overflow: "hidden" }}>
        {projects.map((p, i) => <ProjectRow key={p.num} {...p} isLast={i === projects.length - 1} />)}
      </div>
    </div>
  );
}

export default Portfolio;
