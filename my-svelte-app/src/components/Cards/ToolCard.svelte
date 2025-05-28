<script lang="ts">
  import "../../styles/Sections/workItem.scss";
  import LinkButton from "../Buttons/LinkButton.svelte";

  interface ToolCardProps {
    name: string;
    imageLink?: string;
    svg?: string;
  }
  let { name, imageLink, svg }: ToolCardProps = $props();
</script>

<div class="tool-card">
  {#if svg}
    <span class="tool-card__svg" innerHTML={svg}></span>
  {:else if imageLink}
    <img src={imageLink} alt={name} class="tool-card__image" />
  {:else}
    <span class="tool-card__placeholder">{name}</span>
  {/if}
</div>
