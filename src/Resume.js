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
    <div className="bg-blue-900 text-zinc-100 ">
      <h1 className="text-5xl text-center">Resume</h1>
      <h2 className="text-2xl text-center">Skills</h2>
      <section className="mb-5 text-4xl mx-5">
        <div className="grid grid-cols-3 gap-4 justify-center">
          <p>
            <SiMicrosoftazure /> Azure
          </p>
          <p>
            <SiAzuredevops />
            Azure Devops
          </p>
          <p>
            <SiAzurepipelines />
            Azure Pipelines
          </p>
          <p>
            <SiDotnet />
            .NET
          </p>
          <p>
            <SiCsharp />
            C#
          </p>
          <p>
            <SiHtml5 />
            HTML5
          </p>
          <p>
            <SiCss3 />
            CSS3
          </p>
          <p>
            <SiTailwindcss />
            Tailwind CSS
          </p>
          <p>
            <SiJavascript />
            Javascript
          </p>
        </div>
      </section>
      <div id="experience" className="text-md mx-2 ">
        <h3 className="text-lg text-yellow-400">Microsoft</h3>
        <h4 className="text-md">Software Engineer II</h4>
        <h5 className="text-md">June 2018-Present</h5>
        <p className="text-base font-mono mb-1">
          Created and maintained 3 sets of cloud-hosted web services and
          technical documentation for external consupmtion using .NET Core,
          <br />
          Azure, and a NoSql database.The main service averages 1 million
          requests per month with less than a second average response time.
        </p>
        <br />
        <h3 className="text-lg text-yellow-400">
          Microsoft Software & Systems Academy - Cloud Applications Developer
        </h3>
        <h4 className="text-md">Student</h4>
        <h5 className="text-md">January 2018 - May 2018</h5>
        <p className="text-base font-mono mb-1">
          <a
            href="https://military.microsoft.com/mssa/"
            className="underline hover:text-yellow-400"
          >
            A 18-week technical program designed to train military veterans
          </a>{" "}
          the technical skills needed to become a cloud applications developer.
          <br />
          Skills taught include C#, Azure, ASP.NET, T-SQL.
        </p>
        <br />
      </div>
    </div>
  );
}

export default Resume;
