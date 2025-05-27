<script lang="ts">
  import { onMount } from "svelte";
  import Header from "../components/Layout/Header.svelte";
  import Hero from "../components/Cards/Hero.svelte";
  import Footer from "./Footer.svelte";
  import About from "./Sections/About.svelte";
  import "../styles/layouts.scss";

  onMount(async () => {});
</script>

<Header></Header>
<div class="main-layout">
  <main>
    <Hero />
    <About />
  </main>
  <Footer></Footer>
</div>
