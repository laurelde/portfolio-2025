<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { MDCRipple } from "@material/ripple";
  import "../../styles/card.scss";

  interface Props {
    title?: string;
    imgSrc?: any;
    id?: any;
    favorite?: boolean;
    descriptionSlot?: import('svelte').Snippet;
  }

  let {
    title = "",
    imgSrc = null,
    id = null,
    favorite = $bindable(false),
    descriptionSlot
  }: Props = $props();

  const dispatch = createEventDispatcher();

  function favorited(e) {
    favorite = !favorite;
    dispatch("favorited", {
      id: id,
      favorite: favorite,
    });
  }

  onMount(() => {
    const selector = ".mdc-button, .mdc-icon-button, .mdc-card__primary-action";
    const ripples = [].map.call(
      document.querySelectorAll(selector),
      function (el) {
        return new MDCRipple(el);
      }
    );
  });
</script>

<div class="mdc-card mdc-card--outlined" onclick={favorited} {id}>
  <div class="mdc-card__primary-action">
    <div class="mdc-card__media mdc-card__media--square">
      <div class="mdc-card__media-content">
        <img class="mdc-card__img" src={imgSrc} />
      </div>
    </div>
    <div>
      <h3>
        {title}
        {#if favorite}
          <span class="material-icons-outlined"> favorite </span>{:else}
          <span class="material-icons-outlined"> favorite_border </span>{/if}
      </h3>
    </div>
    {@render descriptionSlot?.()}
    <div class="mdc-card__ripple"></div>
  </div>
</div>
