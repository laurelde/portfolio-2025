<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";
  import "../../styles/Components/button.scss";

  interface Props {
    label?: string;
    disabled?: boolean;
    theme?: string;
    type?: string;
  }

  let {
    label = "",
    disabled = false,
    theme = "mdc-button--raised",
    type = "button",
  }: Props = $props();

  const dispatch = createEventDispatcher();

  function onClick(e) {
    dispatch("click", {
      buttonElement: e.currentTarget,
    });
  }

  onMount(() => {
    const buttonRipple = new MDCRipple(document.querySelector(".mdc-button"));
  });
</script>

<div class="mdc-touch-target-wrapper">
  <button
    class={`fc-button mdc-button mdc-button--touch ${theme}`}
    {disabled}
    onclick={onClick}
    {type}
  >
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__touch"></span>
    <span class="mdc-button__label">{label}</span>
  </button>
</div>
