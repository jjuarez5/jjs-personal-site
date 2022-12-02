import { SiLinkedin, SiGithub } from "react-icons/si";

function calculateExperience() {
  var today = new Date().getFullYear();
  return Math.abs(today - 2018);
}

function About() {
  return (
    <div className="bg-blue-800 flex flex-row" id="home">
      <div className="flex flex-col mr-10 mx-10">
        <div className="flex flex-row mr-20 mr-0.5 mb-5 mt-5">
          <div className="text-2xl text-zinc-100">
            <h2>Hello,</h2>
          </div>
          <div className="text-2xl text-yellow-400 mx-1">
            <h2>my name is</h2>
          </div>
        </div>
        <div className="flex flex-col px-1">
          <div className="text-5xl text-yellow-400 bp">
            <h1>Julio "JJ" Juarez</h1>
          </div>
          <div className="text-2xl text-zinc-100 mb-4">
            <h2 className="flex flex-row">
              Software Engineer
              <a href="https://github.com/jjuarez5">
                <SiGithub className="hover:text-yellow-400 mx-1" />
              </a>
              <a href="https://www.linkedin.com/in/juliojuarez713/">
                <SiLinkedin className="hover:text-yellow-400 mx-1" />
              </a>
            </h2>
          </div>
          <div className="flex flex-row py-1 mb-5 text-zinc-100 text-justify">
            <p className="w-6/12">
              I have {calculateExperience()} years of experience in the software
              engineering industry, primarily as a back-end web developer. Over
              the past four years, I have created and maintained cloud-hosted
              web services/api's that have been consumed by hundreds of other
              developers and used by thousands of users. I have experience
              writing technical documentation, implementing new features, and
              onboarding users to to the api's. In my off time, I like to
              enhance my knowledge of software engineering, front-end web
              development skills, as well as volunteer as a technical mentor to
              veterans and others who are interested in breaking into the tech
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
