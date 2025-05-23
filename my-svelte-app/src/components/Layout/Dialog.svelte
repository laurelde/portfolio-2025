<script lang="ts">
  import { run } from 'svelte/legacy';

  import { createEventDispatcher } from "svelte";
  import { MDCDialog } from "@material/dialog";
  import { onMount, onDestroy } from "svelte";
  import "../../styles/dialog.scss";

  interface Props {
    id?: string;
    open?: boolean;
    title?: string;
    contentSlot?: import('svelte').Snippet;
  }

  let {
    id = "",
    open = $bindable(false),
    title = "",
    contentSlot
  }: Props = $props();

  let dialog = $state(null);
  run(() => {
    open ? dialog?.open() : dialog?.close();
  });

  const dispatch = createEventDispatcher();

  function cancelEvent(e) {
    dispatch("dialogCanceled", {
      event: e,
      id: id,
    });
  }

  function submitEvent(e) {
    dispatch("dialogSubmitted", {
      event: e,
      id: id,
    });
  }

  onMount(() => {
    dialog = new MDCDialog(document.querySelector(`#${id}.mdc-dialog`));

    dialog.listen("MDCDialog:opened", (e) => {
      dispatch("dialogOpened", e);
    });

    dialog.listen("MDCDialog:closed", (e) => {
      dispatch("dialogClosed", e);
    });
  });

  onDestroy(() => {
    open = false;
    dispatch("closeEvent", {
      dialog: id,
    });
  });
</script>

<div class="mdc-dialog mdc-dialog--fullscreen" {id}>
  <div class="mdc-dialog__container">
    <div
      class="mdc-dialog__surface"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-dialog-title`}
      aria-describedby={`${id}-dialog-content`}
    >
      <div class="mdc-dialog__header">
        <h2 class="mdc-dialog__title" id={`${id}-dialog-title`}>
          {title}
        </h2>
        <button
          class="mdc-icon-button material-icons mdc-dialog__close"
          data-mdc-dialog-action="close"
        >
          close
        </button>
      </div>
      <div class="mdc-dialog__content" id={`${id}-dialog-content`}>
        {@render contentSlot?.()}
      </div>
      <div class="mdc-dialog__actions">
        <button
          type="button"
          class="fc-button mdc-button mdc-dialog__button"
          data-mdc-dialog-action="ok"
        >
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">OK</span>
        </button>
      </div>
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>
