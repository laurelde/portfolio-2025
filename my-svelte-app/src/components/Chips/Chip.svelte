<script lang="ts">
  import {onMount} from "svelte";
  import "../../styles/Components/chip.scss";

  interface Props {
    labels?: string[];
  }

  let {
    labels = [],
  }: Props = $props();
</script>

<div class="chip-set">
  {#each labels as item}
    <div class="chip">
      <span class="chip__label">{item}</span>
    </div>
  {/each}
</div>
  