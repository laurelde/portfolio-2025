<script lang="ts">
  import SectionHeader from "../../components/Layout/SectionHeader.svelte";
  import headshot from "../../assets/images/headshot.jpeg";
  import "../../styles/Sections/workItem.scss";
  import WorkItem from "./WorkItem.svelte";
  import materialUIIMage from "../../assets/tools/MaterialUI.svg";
  import sqlImage from "../../assets/tools/sql.svg";
  import tableauImage from "../../assets/tools/tableau.svg";
  // import { state } from "svelte/store";
  const workData = $state(
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
      ],
      "tools": [
        {"name": "Svelte", "imageLink": "https://svelte.dev/favicon.png"},
        {"name": "TypeScript", "imageLink": "https://www.typescriptlang.org/favicon.ico"},
        {"name": "Material UI", "imageLink": materialUIIMage},
        {"name": "CSS", "imageLink": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"},
        {"name": "Playwright", "imageLink": "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/playwright-y50bnthygb3rvsppvkm9e.png/playwright-q55xzpenhgjsodksybst.png?_a=DATAdtAAZAA0"}
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
      ], 
      "tools": [
        {"name": "Angular", "imageLink": "https://angular.io/assets/images/logos/angular/angular.png"},
        {"name": "JavaScript", "imageLink": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg"},
        {"name": "Selenium", "imageLink": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png"},
        {"name": "Figma", "imageLink": "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"},
        {"name": "CSS", "imageLink": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"}
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
      ],
      "tools": [
        {"name": "Python", "imageLink": "https://www.python.org/static/favicon.ico"},
        {"name": "SQL", "imageLink": sqlImage},
        {"name": "Tableau", "imageLink": tableauImage},
        {"name": "HTML", "imageLink": "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"},
        {"name": "CSS", "imageLink": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"},
      ]
    }
  ]
);

</script>

<div class="section">
  <SectionHeader name="Where I've <span class='highlight'>Work</span>ed" sectionId="work"/>
  {#each workData as item}
    <WorkItem
      location={item.location}
      company={item.company}
      timeFrame={item.timeFrame}
      title={item.title}
      bullets={item.bullets}
      tools={item.tools}
    />
  {/each}

</div>
