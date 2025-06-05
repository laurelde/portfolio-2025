<script lang="ts">
  import { MDCTextField } from "@material/textfield";
  import { onMount, createEventDispatcher } from "svelte";
  import "../../styles/Components/input.scss";

  interface Props {
    id?: string;
    label?: string;
    name?: string;
  }

  let { id = "", label = "" , name = ""}: Props = $props();

  const dispatch = createEventDispatcher();

  onMount(() => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      const textField = new MDCTextField(element);
    }
  });

  function valueChanged(e) {
    let newValue = e.srcElement.value;
    dispatch("valueChanged", {
      value: newValue,
    });
  }
</script>

<label {id} class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea ">
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>
    <span class="mdc-notched-outline__notch">
      <span class="mdc-floating-label" id={`${id}-field-label`}>{label}</span>
    </span>
    <span class="mdc-notched-outline__trailing"></span>
  </span>
  <span class="mdc-text-field__resizer">
    <textarea class="mdc-text-field__input" rows="8" cols="40" aria-label={label} oninput={valueChanged}
    {name}></textarea>
  </span>
</label>
