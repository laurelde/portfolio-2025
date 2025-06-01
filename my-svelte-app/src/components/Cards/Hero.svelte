<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";
  import "../../styles/Components/card.scss";
  import LinkButton from "../Buttons/LinkButton.svelte";
  import Typewriter from 'typewriter-effect/dist/core';

  let showTypewriter = true;

  onMount(async() => {
    // const typewriter = new Typewriter('#typewriter', {
    //   strings: ["Hi! I'm Laurel."],
    //   autoStart: true,
    //   loop: false,
    //   delay: 150,
    // });

    // setTimeout(() => {
    //   showTypewriter = false;
    // }, 4000);
  });

</script>

<div class="hero hero--landing">
  <!-- {#if showTypewriter}
    <h2 id="typewriter"></h2>
  {:else} -->
    <h2 >Hi! I'm <span class={`highlight in-view display}`}>Laurel.</span></h2>
  <!-- {/if} -->
  <h1 class={`in-view display`}>
    I design & build intuitive, engaging, and performant <span
      class="highlight">digital experiences.</span
    >
  </h1>
  <LinkButton
    label="Let's Connect!"
    href="/#about"
    theme="mdc-button--raised mdc-button--touch"
    classes="in-view display"
  />
</div>
