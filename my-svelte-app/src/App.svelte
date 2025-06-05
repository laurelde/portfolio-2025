<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Classify from "./pages/Sections/ClassifyApp.svelte";
  import Thanks from "./pages/Sections/Thanks.svelte";

  const routes = {
    "/sections/classify": Classify,
    "/sections/Thanks": Thanks,
    "*": Home
  };

  //Check if the document is loaded (so that this script can be placed in the <head>)


</script>

<Router {routes} />
