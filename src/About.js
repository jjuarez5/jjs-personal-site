function calculateExperience() {
  var today = new Date().getFullYear();
  return Math.abs(today - 2018);
}

function About() {
  return (
    <div className="bg-blue-800 flex flex-row" name="home">
      <div className="flex flex-col mr-10 mx-10">
        <div className="flex flex-row mr-20 mr-0.5 mb-5">
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
          <div className="text-2xl text-zinc-100 mb-5">
            <h2>Software Engineer</h2>
          </div>
          <div className="flex flex-col py-1 text-zinc-100 text-justify">
            <p>
              I have {calculateExperience()} years of experience as a software
              engineer, primarily as a back-end developer. Over the past four
              years I have created and maintained cloud-hosted web
              services/api's that have been consumed by hundreds of other
              developers. I have experience writing technical documentation,
              implementing new features, and onboarding users to to the api's.
              In my off time, I like to enhance my knowledge of software
              engineering, front-end development skills, as well as mentor
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
