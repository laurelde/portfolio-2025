<script lang="ts">
  import SectionHeader from "../../components/Layout/SectionHeader.svelte";
  import headshot from "../../assets/images/headshot.jpeg";
  import "../../styles/Sections/workItem.scss";
  import ProjectItem from "./ProjectItem.svelte";
  import materialUIIMage from "../../assets/tools/MaterialUI.svg";
  import sqlImage from "../../assets/tools/sql.svg";
  import tableauImage from "../../assets/tools/tableau.svg";
  import fetch_browse_image from "../../assets/projects/fetch/fetch_browse.png";
  import fetch_favorite_image from "../../assets/projects/fetch/fetch_favorite.png";
  import fetch_landing_image from "../../assets/projects/fetch/fetch_landing.png";
  import polaris_report from "../../assets/projects/polaris/report.pdf";
  import classify_img3 from "../../assets/projects/classify/screen3.png";
  import classify_img2 from "../../assets/projects/classify/screen7.png";
  import classify_img4 from "../../assets/projects/classify/screen9.png";
  import classify_img1 from "../../assets/projects/classify/screen1.png";
  import classify_img5 from "../../assets/projects/classify/screen5.png";
  // import {} from "svelte";
  // import { state } from "svelte/store";
  const projectData = $state(
  [
    {
      "projectName": "Classify App",
      "websiteLink": polaris_report,
      "projectType": "UX Design",
      "images" : [
        classify_img1,
        classify_img2,
        classify_img3,
        classify_img4,
        classify_img5
      ],
      "description": "Mobile app prototype for creating local classes and events for students to meet up and learn together.",
      "tools": [ "Sketching", "Wireframing", "Prototyping", "UX Research" ]
    },
    {
      "websiteLink": "https://fetch-7gkioa2ow-laurel-dentingers-projects.vercel.app/#/Login",
      "githubLink": "https://github.com/laurelde/fetch/tree/main/docs",
      "projectName": "Fetch Pet Finder",
      "projectType": "Frontend Development",  
      "images" : [
        fetch_landing_image,
        fetch_browse_image,
        fetch_favorite_image
      ],
      "description": [
        "Engineered a versatile library of reusable UI components using the Svelte framework, optimizing efficiency and consistency across multiple projects within the organization.",
        "Diligently ensured seamless cross-browser compatibility and responsive design implementation in frontend code, employing BrowserStack and adhering to industry best practices.",
        "Spearheaded the establishment of accessible code standards for HTML markup, fostering WCAG AA compliance and enhancing inclusivity for all users.",
        "Authored comprehensive documentation for seamlessly integrating Svelte components into .NET projects for full-stack developers, thereby streamlining development workflows and enhancing project scalability."
      ],
      "tools": [ "Frontend Development", "UX Design", "REST APIs", "Svelte" ]

    },
    {
      "projectName": "Polaris Report",
      "projectType": "UX Research",
      "websiteLink": "https://polaris-report.vercel.app/",
      "images" : [
        polaris_report
      ],
      "description": [
        "Developed a comprehensive web application for analyzing and visualizing data from the Polaris satellite constellation, utilizing React, TypeScript, and D3.js.",
        "Implemented advanced data processing algorithms to extract insights from large datasets, enhancing the application's analytical capabilities.",
        "Designed an intuitive user interface with responsive design principles, ensuring accessibility across various devices and screen sizes.",
        "Collaborated with a cross-functional team to integrate backend services and APIs, enabling real-time data updates and interactions."
      ],
      "tools": [
        {"name": "React", "imageLink": "https://reactjs.org/favicon.ico"},
        {"name": "TypeScript", "imageLink": "https://www.typescriptlang.org/favicon.ico"},
        {"name": "D3.js", "imageLink": "https://d3js.org/favicon.ico"},
        {"name": "CSS", "imageLink": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"},
      ]
    },
  ]
);

</script>

<div class="section">
  <SectionHeader name="Recent <span class='highlight'>Projects</span>" sectionId="projects"/>
      <ProjectItem
        projectName={projectData[0].projectName}
        websiteLink={projectData[0].websiteLink}
        githubLink={projectData[0].githubLink}
        downloadLink={projectData[0].downloadLink}
        description={projectData[0].description}
        tools={projectData[0].tools}
      >
      {#snippet images()}
        <div class="project-images project-images--app">
          {#each projectData[0].images as image}
            <img src={image} alt={projectData[0].projectName} class="project-image project-image--app" />
          {/each}
        </div>
      {/snippet}
    </ProjectItem>

    <!-- <ProjectItem
    projectName={projectData[1].projectName}
    websiteLink={projectData[1].websiteLink}
    githubLink={projectData[1].githubLink}
    downloadLink={projectData[1].downloadLink}
    description={projectData[1].description}
    tools={projectData[1].tools}
  >
  {#snippet images()}
    <div class="project-images project-images--desktop">
      {#each projectData[1].images as image}
        <img src={image} alt={projectData[1].projectName} class="project-image project-image--desktop" />
      {/each}
    </div>
  {/snippet}
</ProjectItem> -->
</div>
