<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";
  import "../../styles/card.scss";

  interface Props {
    subtitle?: string;
    title?: string;
    description?: string;
  }

  let { subtitle = "", title = "", description = "" }: Props = $props();
</script>

<div class="hero hero--landing">
  <h3>{subtitle}</h3>
  <h1>{title}</h1>
  <h2>{description}</h2>
</div>
