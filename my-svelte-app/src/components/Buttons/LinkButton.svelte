<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";
  import "../../styles/button.scss";

  interface Props {
    label?: string;
    disabled?: boolean;
    href?: string;
    theme?: string;
  }

  let {
    label = "",
    disabled = false,
    href = "",
    theme = "mdc-button--raised",
  }: Props = $props();

  onMount(() => {
    const buttonElement = document.querySelector(".mdc-button");
    if (buttonElement) {
      const buttonRipple = new MDCRipple(buttonElement);
    }
  });
</script>

<div class="mdc-touch-target-wrapper">
  <a {href} class={`fc-button mdc-button mdc-button--touch ${theme}`}>
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__touch"></span>
    <span class="mdc-button__label">{label}</span>
  </a>
</div>
