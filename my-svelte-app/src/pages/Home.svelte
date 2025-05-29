<script lang="ts">
  import { onMount } from "svelte";
  import Header from "../components/Layout/Header.svelte";
  import Hero from "../components/Cards/Hero.svelte";
  import Footer from "./Footer.svelte";
  import About from "./Sections/About.svelte";
  import Work from "./Sections/Work.svelte";
  import Contact from "./Sections/Contact.svelte";  
  import Projects from "./Sections/Projects.svelte";
  import "../styles/layouts.scss";
  import Opener from "../components/Cards/Opener.svelte";
    
  let showOpener = true;
    

  onMount(async () => {
    setTimeout(() => {
      showOpener = false;
    }, 3000);
  });
</script>


{#if showOpener}
  <Opener />
{:else}
<Header></Header>
<div class="main-layout">
  <main>
    <Hero />
    <About />
    <Work />
    <Projects />
    <Contact />
  </main>
  <Footer></Footer>
</div>
{/if}
