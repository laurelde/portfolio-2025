<script lang="ts">
  import ToolCard from "../../components/Cards/ToolCard.svelte";
  import Chip from "../../components/Chips/Chip.svelte";
  import type { Snippet } from "svelte";


  interface ProjectItemProps {
    projectName: string;
    websiteLink?: string;
    githubLink?: string;
    downloadLink?: string;
    images: Snippet;
    description: string[];
    tools?: string[];
  }

  let { projectName, websiteLink, githubLink, downloadLink, images, description, tools }: ProjectItemProps = $props();

  import "../../styles/Sections/projectItem.scss";
</script>

<div class="project-item">
  <div class="project-header">
    <h3>{projectName}</h3>
    <p class="project-item__description">{description}</p>
    <div class="project-item__toolbar">
      <Chip labels={tools} />
    </div>
  </div>
  <div class="project-images">
    {@render images()}
  </div>
</div>


