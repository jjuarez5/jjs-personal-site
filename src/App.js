import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      {/* Corner UI decorations */}
      <div style={{
        position: "fixed", top: 0, left: 0, width: 50, height: 50,
        borderTop: "2px solid #ff6b00", borderLeft: "2px solid #ff6b00",
        boxShadow: "-2px -2px 12px rgba(255,107,0,0.3)",
        pointerEvents: "none", zIndex: 200
      }} />
      <div style={{
        position: "fixed", bottom: 0, right: 0, width: 50, height: 50,
        borderBottom: "2px solid #ff6b00", borderRight: "2px solid #ff6b00",
        boxShadow: "2px 2px 12px rgba(255,107,0,0.3)",
        pointerEvents: "none", zIndex: 200
      }} />
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
