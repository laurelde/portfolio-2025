<script lang="ts">
  import Router from "svelte-spa-router";
  import Login from "./pages/Login.svelte";
  import Browse from "./pages/Browse.svelte";
  import Favorites from "./pages/Favorites.svelte";
  import Home from "./pages/Home.svelte";

  const routes = {
    "/login": Login,
    "/browse": Browse,
    "/favorites": Favorites,
    "*": Home,
  };
</script>

<Router {routes} />
