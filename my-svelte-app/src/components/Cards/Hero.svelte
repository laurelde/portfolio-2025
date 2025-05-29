<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";
  import "../../styles/Components/card.scss";
  import LinkButton from "../Buttons/LinkButton.svelte";
</script>

<div class="hero hero--landing">
  <h2>Hi! I'm <span class="highlight">Laurel.</span></h2>
  <h1>
    I design & build intuitive, engaging, and performant <span
      class="highlight">digital experiences.</span
    >
  </h1>
  <LinkButton
    label="Let's Connect!"
    href="/#about"
    theme="mdc-button--raised mdc-button--touch"
  />
</div>
