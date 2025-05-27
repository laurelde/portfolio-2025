<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";
  import "$components/card.scss";
  import LinkButton from "../Buttons/LinkButton.svelte";
</script>

<div class="hero hero--landing">
  <h2>Hi! I'm Laurel.</h2>
  <h1>
    I design & build intuitive, accessible, and performant <span
      class="highlight">digital experiences.</span
    >
  </h1>
  <h3>
    I'm a UX engineer specializing in creating intuitive, engaging, and
    accessible digital products that solve real user problems.
  </h3>
  <LinkButton
    label="Let's Connect!"
    href="/#about"
    theme="mdc-button--raised mdc-button--touch"
  />
</div>
