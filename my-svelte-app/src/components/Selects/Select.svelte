<script lang="ts">
  import { MDCSelect } from "@material/select";
  import { onMount, createEventDispatcher } from "svelte";
  import "../../styles/select.scss";

  interface Props {
    options?: any;
    label?: string;
    id?: string;
    selectedId?: any;
  }

  let {
    options = [],
    label = "",
    id = "",
    selectedId = $bindable(null)
  }: Props = $props();

  const dispatch = createEventDispatcher();

  function valueChanged(option) {
    dispatch("valueChanged", {
      selectedOption: option,
    });
  }

  onMount(() => {
    const select = new MDCSelect(document.querySelector(`#${id}.mdc-select`));

    select.listen("MDCSelect:change", (e) => {
      selectedId = e.detail.value;
      valueChanged(selectedId);
    });
  });
</script>

<div class="mdc-select mdc-select--outlined" {id}>
  <div class="mdc-select__anchor" aria-labelledby={label}>
    <span class="mdc-notched-outline">
      <span class="mdc-notched-outline__leading"></span>
      <span class="mdc-notched-outline__notch">
        <span id={label} class="mdc-floating-label">{label}</span>
      </span>
      <span class="mdc-notched-outline__trailing"></span>
    </span>
    <span class="mdc-select__selected-text-container">
      <span id="demo-selected-text" class="mdc-select__selected-text"></span>
    </span>
    <span class="mdc-select__dropdown-icon">
      <svg
        class="mdc-select__dropdown-icon-graphic"
        viewBox="7 10 10 5"
        focusable="false"
      >
        <polygon
          class="mdc-select__dropdown-icon-inactive"
          stroke="none"
          fill-rule="evenodd"
          points="7 10 12 15 17 10"
        />
        <polygon
          class="mdc-select__dropdown-icon-active"
          stroke="none"
          fill-rule="evenodd"
          points="7 15 12 10 17 15"
        />
      </svg>
    </span>
  </div>
  <div
    class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
  >
    <ul
      class="mdc-list"
      role="menu"
      aria-hidden="true"
      aria-orientation="vertical"
      tabindex="-1"
    >
      {#each options as option}
        <li
          class={`mdc-list-item ${option == selectedId ? "mdc-list-item--selected" : ""}`}
          aria-selected={option == selectedId ? true : false}
          data-value={option}
          role="menuitem"
        >
          <span class="mdc-list-item__ripple"></span>
          <span class="mdc-list-item__text">{option}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>
