<script lang="ts">
  import ToolCard from "../../components/Cards/ToolCard.svelte";
  interface WorkItemProps {
    company: string;
    timeFrame?: string;
    title: string;
    location?: string;
    bullets: string[];
    tools?: ToolItem[];
  }

  interface ToolItem {
    name: string;
    imageLink?: string;
    svg?: string;
  }
  let { company, timeFrame = "", title, location, bullets, tools }: WorkItemProps = $props();
  import "../../styles/Sections/workItem.scss";
</script>

<div class="work-item">
  <div class="tools">
    {#each tools as tool}
      <ToolCard name={tool.name} imageLink={tool.imageLink} svg={tool.svg}/>
    {/each}
  </div>
  <div class="work-item__content"> 
    
    <h3>{company}</h3>
    <h4>{title}</h4>
    <span class="work-item__time-frame">{timeFrame}</span>
    <span>
      <span class="material-symbols-outlined">
        pin_drop
        </span>      
        {location}
    </span>
    <ul class="work-item__bullets">
      {#each bullets as bullet}
        <li class="work-item__bullet">{bullet}</li>
      {/each}
    </ul>
  </div>
</div>


