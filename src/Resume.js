import {
  SiMicrosoftazure,
  SiAzuredevops,
  SiAzurepipelines,
  SiDotnet,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

function Resume() {
  return (
    <div
      className="bg-zinc-100 text-black shadow-inner pt-5 border-y-2 border-zinc-300"
      id="resume"
    >
      <h1 className="text-5xl text-center">Resume</h1>
      <h2 className="text-2xl text-center">Skills</h2>
      <section className="mb-5 text-4xl mx-5 flex justify-center" id="skills">
        <div className="grid grid-cols-3 gap-10">
          <p className="text-purple-400">
            <SiMicrosoftazure /> Azure
          </p>
          <p>
            <SiAzuredevops />
            Azure Devops
          </p>
          <p className="text-purple-400">
            <SiAzurepipelines />
            Azure Pipelines
          </p>
          <p>
            <SiDotnet />
            .NET
          </p>
          <p className="text-purple-400">
            <SiCsharp />
            C#
          </p>
          <p>
            <SiHtml5 />
            HTML5
          </p>
          <p className="text-purple-400">
            <SiCss3 />
            CSS3
          </p>
          <p>
            <SiTailwindcss />
            Tailwind CSS
          </p>
          <p className="text-purple-400">
            <SiJavascript />
            Javascript
          </p>
        </div>
      </section>
      <div
        id="experience"
        className="text-md mr-10 mx-10 text-center text-black p-5"
      >
        <h3 className="text-lg text-purple-400">Microsoft</h3>
        <h4 className="text-md">Software Engineer II</h4>
        <h5 className="text-md">June 2018-Present</h5>
        <p className="text-base font-mono mb-1">
          Co-owned the 2nd most highly trafficked web services capable of
          handling 1M calls per month for external learning partners to
          upload/modify course offerings to be displayed on the MS Learn
          platform,
          <br /> track learner enrollments, as well as onboard new learning
          partners and learning events, each with CRUD operations. Created
          technical documentation for API use
          <br /> and consumption. Modified legacy web applications to achieve a
          minimum internal accessibility criterion.
        </p>
        <br />
        <h3 className="text-lg text-purple-400">
          Microsoft Software & Systems Academy - Cloud Applications Developer
        </h3>
        <h4 className="text-md">Student</h4>
        <h5 className="text-md">January 2018 - May 2018</h5>
        <p className="text-base font-mono mb-1">
          Obtained the Microsoft Technology Associate (MTA 98-361) as
          pre-requisite for an 18-week technical program developed by
          <a
            href="https://military.microsoft.com/mssa/"
            className="underline hover:text-purple-400"
          >
            {" "}
            Microsoft for transitioning military veterans
          </a>
          .
          <br />
          Learned the fundamentals of C#, T-SQL, and ASP.NET. Pair-programmed a
          console-based game named “Space-Invaders 1983”.
        </p>
        <br />
        <h3 className="text-lg text-purple-400">United States Navy</h3>
        <h4 className="text-md">Petty Officer 2nd Class</h4>
        <h5 className="text-md">June 2011 - February 2018</h5>
        <p className="text-base font-mono mb-1">
          Active Duty Aviation Electrician's Mate specializing on both the
          C-130T Hercules and P3-C Orion.
          <br /> Qualified as a line-maintenance technician as well as a
          Collateral Duty Inspector.
        </p>
        <br />
      </div>
    </div>
  );
}

export default Resume;
