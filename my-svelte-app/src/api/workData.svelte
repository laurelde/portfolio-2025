

interface WorkItem {
  company: string;
  timeFrame?: string;
  title: string;
  location?: string;
  bullets: string[];
}

export const workData = $state(
  [
    {
      "company": "AllianceBernstein",
      "timeFrame": "January 2022 - Present",
      "title": "Frontend Web Developer",
      "location": "Nashville, TN",
      "bullets": [
        "Engineered a versatile library of reusable UI components using the Svelte framework, optimizing efficiency and consistency across multiple projects within the organization.",
        "Diligently ensured seamless cross-browser compatibility and responsive design implementation in frontend code, employing BrowserStack and adhering to industry best practices.",
        "Spearheaded the establishment of accessible code standards for HTML markup, fostering WCAG AA compliance and enhancing inclusivity for all users.",
        "Authored comprehensive documentation for seamlessly integrating Svelte components into .NET projects for full-stack developers, thereby streamlining development workflows and enhancing project scalability."
      ]
    },
    {
      "company": "CellPort Software",
      "timeFrame": "May 2020 - Dec 2021",
      "title": "UX Developer & Implementation Engineer",
      "location": "Exton, PA",
      "bullets": [
        "Consulted with current and potential clients to gather stakeholder requirements and discover pain points",
        "Constructed design specifications for client implementations and configured platform accordingly",
        "Designed wireframes and prototypes to communicate UX concepts to interdisciplinary team using Figma · Developed HTML, CSS, JavaScript, and Angular code to bring designs to production",
        "Conducted Usability Testing sessions to gather feedback and iterate on UI/UX concepts"
      ]
    },
    {
      "company": "Trilogy Education",
      "timeFrame": "Jul 2020 - Jan 2021",
      "title": "Teaching Assistant - Data Analysis",
      "location": "Remote",
      "bullets": [
       "Instructed class of 25 students on foundations of programming, including databases, object-oriented programming concepts, business intelligence software, and frontend development",
        "Provided student support for content including Python, SQL, JSON, HTML, CSS, and more",
        "Facilitated breakout group activities and fostered collaborative, engaging environment virtually",
        "Helped troubleshoot various technical issues, including installing software and version control tools"
      ]
    }
  ]
);
