<script lang="ts">
  import { MDCTextField } from "@material/textfield";
  import { onMount, createEventDispatcher } from "svelte";
  import "../../styles/input.scss";

  interface Props {
    id?: string;
    label?: string;
  }

  let { id = "", label = "" }: Props = $props();

  const dispatch = createEventDispatcher();

  onMount(() => {
    const textField = new MDCTextField(document.querySelector(`#${id}`));
  });

  function valueChanged(e) {
    let newValue = e.srcElement.value;
    dispatch("valueChanged", {
      value: newValue,
    });
  }
</script>

<label {id} class="mdc-text-field mdc-text-field--outlined">
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>
    <span class="mdc-notched-outline__notch">
      <span class="mdc-floating-label" id={`${id}-field-label`}>{label}</span>
    </span>
    <span class="mdc-notched-outline__trailing"></span>
  </span>
  <input
    type="text"
    class="mdc-text-field__input"
    aria-labelledby={`${id}-field-label`}
    oninput={valueChanged}
  />
</label>
