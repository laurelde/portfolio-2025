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
    <Hero
      subtitle="Hi! I'm Laurel."
      title="I design & build digital experiences."
      description="I'm a UX engineer specializing in creating intuitive, engaging, and accessible digital products that solve real user problems."
    />
  </main>
  <Footer></Footer>
</div>
