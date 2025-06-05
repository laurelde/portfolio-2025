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
      "websiteLink": "/#/sections/classify",
      "projectType": "UX Design",
      "images" : [
        classify_img1,
        classify_img2,
        classify_img3,
        classify_img4,
        classify_img5
      ],
      "description": "Mobile app prototype for creating local classes and events for students to meet up and learn together.",
      "tools": [ "UX Research", "Wireframing", "Prototyping", "Sketching" ]
    },
    {
      "websiteLink": "https://fetch-7gkioa2ow-laurel-dentingers-projects.vercel.app/#/Login",
      "githubLink": "https://github.com/laurelde/fetch/tree/main/docs",
      "projectName": "Fetch App",
      "projectType": "Frontend Development",  
      "images" : [
        fetch_browse_image,
        fetch_landing_image,
        fetch_favorite_image
      ],
      "description": [
        "Svelte app for browsing and favoriting adoptable dogs, using REST APIs and session storage for user authentication.",
      ],
      "tools": [ "Svelte", "REST APIs", "TypeScript", "UX Design" ]

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
    projectName={projectData[1].projectName}
    websiteLink={projectData[1].websiteLink}
    githubLink={projectData[1].githubLink}
    downloadLink={projectData[1].downloadLink}
    description={projectData[1].description}
    tools={projectData[1].tools}
  >
  {#snippet links()}
  <ul>
    <li class="icon--social-media">
      <a href={projectData[1].websiteLink} aria-label="Fetch App Website" target="_blank" class="material-icon-link"
        >
      <span class="material-symbols-outlined">
        arrow_circle_right
        </span></a>
    </li>
  <li class="icon--social-media">
    <a
      href={projectData[1].githubLink}
      aria-label="Github for Fetch App"
      target="_blank"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-github"
        ><path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        ></path></svg
      ></a
    >
  </li>
  </ul>
  {/snippet}
  {#snippet images()}
    <div class="project-images project-images--desktop">
      {#each projectData[1].images as image}
        <img src={image} alt={projectData[1].projectName} class="project-image project-image--desktop" />
      {/each}
    </div>
  {/snippet}
  </ProjectItem>   
  <ProjectItem
        projectName={projectData[0].projectName}
        websiteLink={projectData[0].websiteLink}
        githubLink={projectData[0].githubLink}
        downloadLink={projectData[0].downloadLink}
        description={projectData[0].description}
        tools={projectData[0].tools}
      >
      {#snippet links()}
  <ul>
    <li class="icon--social-media">
      <a href={projectData[0].websiteLink} aria-label="Classify App Case Study" target="_blank" class="material-icon-link"
        >
      <span class="material-symbols-outlined">
        arrow_circle_right
        </span></a>
    </li>
  </ul>
  {/snippet}
      {#snippet images()}
        <div class="project-images project-images--app">
          {#each projectData[0].images as image}
            <img src={image} alt={projectData[0].projectName} class="project-image project-image--app" />
          {/each}
        </div>
      {/snippet}
    </ProjectItem>


</div>
