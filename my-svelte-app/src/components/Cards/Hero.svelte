<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";
  import "../../styles/card.scss";
  import LinkButton from "../Buttons/LinkButton.svelte";
</script>

<div class="hero hero--landing">
  <h3>Hi! I'm Laurel.</h3>
  <h1>
    I design & build intuitive, accessible, and performant <span
      class="highlight">digital experiences.</span
    >
  </h1>
  <h2>
    I'm a UX engineer specializing in creating intuitive, engaging, and
    accessible digital products that solve real user problems.
  </h2>
  <LinkButton
    label="Let's Connect!"
    href="#contact"
    theme="mdc-button--raised mdc-button--touch"
  />
</div>
