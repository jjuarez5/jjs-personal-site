import { useState } from "react";

const orange = "#ff6b00";
const border = "rgba(255,107,0,0.2)";
const borderDim = "rgba(255,107,0,0.08)";
const white = "#f0e8d8";
const dim = "rgba(240,232,216,0.45)";
const dark = "#080502";

const inputStyle = {
  width: "100%",
  background: "rgba(15,8,3,0.8)",
  border: `1px solid ${border}`,
  padding: "10px 14px",
  fontSize: "12px",
  color: white,
  fontFamily: "'IBM Plex Mono', monospace",
  outline: "none",
  transition: "border-color 0.3s, box-shadow 0.3s",
};

const labelStyle = {
  display: "block",
  fontSize: "8px",
  letterSpacing: "3px",
  color: "rgba(255,107,0,0.5)",
  textTransform: "uppercase",
  marginBottom: "6px",
};

function Contact() {
  const [focused, setFocused] = useState(null);

  const getInputStyle = (field) => ({
    ...inputStyle,
    borderColor: focused === field ? orange : border,
    boxShadow: focused === field ? "0 0 8px rgba(255,107,0,0.3)" : "none",
  });

  return (
    <div id="contact" style={{ position: "relative", zIndex: 10, padding: "100px 80px" }}>

      {/* Header */}
      <div className="sec-hdr">
        <span className="sec-num">03 //</span>
        <div className="sec-line" />
        <h2 className="sec-title">CONTACT</h2>
      </div>

      {/* Two-column layout: terminal + form */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

        {/* LEFT — terminal block */}
        <div>
          <p style={{ fontSize: "9px", letterSpacing: "4px", color: orange, textTransform: "uppercase", marginBottom: "12px" }}>// Let's Connect</p>
          <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "36px", fontWeight: 700, color: white, marginBottom: "16px", lineHeight: 1 }}>
            Build Something<br /><span style={{ color: orange }}>Together</span>
          </h3>
          <p style={{ fontSize: "12px", lineHeight: 1.9, color: dim, marginBottom: "32px" }}>
            Open to new opportunities, collaborations, and interesting problems. 
            Drop a message — I'll get back to you.
          </p>

          {/* Terminal */}
          <div style={{ background: "rgba(5,3,1,0.9)", border: `1px solid ${border}`, position: "relative" }}>
            {/* Terminal bar */}
            <div style={{
              height: "28px", borderBottom: `1px solid ${borderDim}`,
              background: "rgba(255,107,0,0.04)",
              display: "flex", alignItems: "center", gap: "6px", padding: "0 12px",
            }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff4444" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,107,0,0.4)" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,107,0,0.2)" }} />
            </div>
            <div style={{ padding: "20px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", lineHeight: 2 }}>
              <div style={{ color: dim }}><span style={{ color: orange }}>const</span> developer = {"{"}</div>
              <div style={{ color: dim }}>&nbsp;&nbsp;name: <span style={{ color: "rgba(200,255,200,0.7)" }}>"Julio Juarez"</span>,</div>
              <div style={{ color: dim }}>&nbsp;&nbsp;role: <span style={{ color: "rgba(200,255,200,0.7)" }}>"Software Engineer"</span>,</div>
              <div style={{ color: dim }}>&nbsp;&nbsp;available: <span style={{ color: orange }}>true</span>,</div>
              <div style={{ color: dim }}>&nbsp;&nbsp;coffee: <span style={{ color: "rgba(200,255,200,0.7)" }}>"always"</span></div>
              <div style={{ color: dim }}>{"}"}</div>
              <div style={{ color: dim }}>&nbsp;</div>
              <div style={{ color: dim }}><span style={{ color: orange }}>await</span> developer.hire();</div>
              <div style={{ color: "rgba(200,255,200,0.7)" }}>// ✓ Request submitted</div>
              <div style={{ color: dim }}>
                <span style={{ color: orange }}>▸</span>
                <span style={{
                  display: "inline-block", width: "8px", height: "14px",
                  background: orange, verticalAlign: "middle", marginLeft: "4px",
                  animation: "cursorBlink 1s step-end infinite",
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div>
          <form name="contact" method="post" netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />

            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle} htmlFor="contactName">Name</label>
              <input id="contactName" name="contactName" type="text" placeholder="Your name"
                style={getInputStyle("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle} htmlFor="contactPhone">Phone (optional)</label>
              <input id="contactPhone" name="contactPhone" type="tel" placeholder="xxx-xxx-xxxx"
                style={getInputStyle("phone")}
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle} htmlFor="contactEmail">Email</label>
              <input id="contactEmail" name="contactEmail" type="email" placeholder="you@example.com"
                style={getInputStyle("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <label style={labelStyle} htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me what you're building..."
                style={{ ...getInputStyle("msg"), resize: "vertical" }}
                onFocus={() => setFocused("msg")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button type="submit"
              style={{
                background: orange, color: dark, border: "none",
                padding: "13px 36px", fontFamily: "'Rajdhani', sans-serif",
                fontSize: "13px", fontWeight: 700, letterSpacing: "3px",
                textTransform: "uppercase", cursor: "pointer",
                boxShadow: "0 0 15px rgba(255,107,0,0.6), 0 0 30px rgba(255,107,0,0.3)",
                transition: "all 0.3s", width: "100%",
              }}
              onMouseEnter={e => { e.target.style.background = "#ff9500"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.background = orange; e.target.style.transform = "translateY(0)"; }}
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "80px",
        paddingTop: "32px",
        borderTop: `1px solid ${borderDim}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "16px", fontWeight: 700, letterSpacing: "4px", color: orange, textShadow: "0 0 8px rgba(255,107,0,0.7)" }}>
          JULIO JUAREZ
        </div>
        <div style={{ fontSize: "9px", letterSpacing: "2px", color: dim }}>
          © {new Date().getFullYear()} — ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
}

export default Contact;
