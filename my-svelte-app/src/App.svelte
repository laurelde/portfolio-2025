<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";

  const routes = {
    "*": Home,
  };

  //Check if the document is loaded (so that this script can be placed in the <head>)


</script>

<Router {routes} />
