<script lang="ts">
  import { onMount } from "svelte";
  import Header from "../components/Layout/Header.svelte";
  import Hero from "../components/Cards/Hero.svelte";
  import Footer from "./Footer.svelte";

  onMount(async () => {});
</script>

<Header></Header>
<div class="main-layout">
  <aside class="layout-column">Reach Out!</aside>
  <main>
    <Hero />
  </main>
  <Footer></Footer>
</div>
