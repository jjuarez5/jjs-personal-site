function Portfolio() {
  return (
    <div className="bg-blue-800 text-zinc-100" id="portfolio">
      <h1 className="text-5xl text-center">Portfolio</h1>
      <section className="text-center">
        <div className="py-5">
          <h3 className="text-3xl text-yellow-400 px-3 text-center">
            <a
              className="hover:underline"
              href="https://github.com/jjuarez5/Space-Explorer-Console-App-Game"
            >
              SpaceExplorer 1983
            </a>
          </h3>
          <p className="px-3">
            A text-based game developed as a console application as a
            pair-programming project during my MSSA Cohort. The game was
            described as similar to "The Oregon Trail", except better, because
            me and{" "}
            <a
              className="underline text-yellow-400"
              href="https://www.linkedin.com/in/gwilsondaytona/"
            >
              Greg Wilson
            </a>{" "}
            made it! 😜 You can find the repo and download the game by clicking
            on the title of this section.
          </p>
        </div>
        <div className="py-5 ">
          <h3 className="text-3xl text-yellow-400 px-3 text-center">
            <a className="hover:underline" href="https://www.themaneallure.com">
              TheManeAllure.com
            </a>
          </h3>
          <p className="px-3">
            I built this website with HTML5 and CSS3 for my wife's business, as
            she is a hair colorist!💇🏽‍♀️💅🏽 I came up with the design and color
            scheme and put my front-end knowledge to the test after reading a
            book on front-end web development. You can navigate to the site by
            clicking on the title of this section.
          </p>
        </div>
        <div className="py-5 ">
          <h3 className="text-3xl text-yellow-400 px-3 text-center">
            <a className="hover:underline" href="#home">
              juliojuarez.io
            </a>
          </h3>
          <p className="px-3">
            This is my personal website dedicated to serve as a digital resume
            and portfolio. This website was built using React.js and Tailwind
            CSS to showcase skills that I'm learning, as well as my previous and
            current experience. I love to code and solve problems by coding as
            well, so please feel free to reach out to me via the contact form
            below.
            <br /> 💻👨🏽‍💻⌨️🖱️🌐
          </p>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
