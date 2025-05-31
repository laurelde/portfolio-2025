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
    links?: Snippet;
    description: string[];
    tools?: string[];
  }

  let { projectName, websiteLink, githubLink, downloadLink, images, links, description, tools }: ProjectItemProps = $props();

  import "../../styles/Sections/projectItem.scss";
</script>

<div class="project-item">
  <div class="project-header text-block animate">
    <span class="project-header-text"><h3>{projectName}</h3><span class="project-links">
      {#if links}
        {@render links()}
      {/if}
    </span></span>
    <p class="project-item__description">{description}</p>
    <div class="project-item__toolbar">
      <Chip labels={tools} />
    </div>
  </div>
  <div class="project-images">
    {#if images}
      {@render images()}
    {/if}
  </div>
</div>