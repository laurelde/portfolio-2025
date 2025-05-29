<script lang="ts">
  import "../../styles/Components/opener.scss";
  import { typeWriter } from "../../helpers/animationsHelper.ts";
  import { onMount } from "svelte";

  let text = "Welcome!";
  let typewriterId: string = "welcome-message";

  onMount(() => {
      typeWriter(typewriterId, text, 100);
  });

</script>

<div class="opener">
  <div class="anim-typewriter">
    <h1 id="welcome-message"></h1>
  </div>
</div>
