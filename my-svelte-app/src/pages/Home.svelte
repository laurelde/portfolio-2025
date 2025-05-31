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
    

  // onMount(async () => {
  //   setTimeout(() => {
  //     showOpener = false;
  //   }, 3000);
  // });

  onMount(async() => {
 console.log("DOM COntent Loaded, applying animations...");
// Use Intersection Observer to determine if objects are within the viewport
  const observer = new IntersectionObserver(entries => {

    console.log("Intersection Observer triggered, checking entries...", entries);
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      return;
    }
    entry.target.classList.remove('in-view');
    });
  });

  // Get all the elements with the .animate class applied
  const allAnimatedElements = document.querySelectorAll('.animate');

  console.log("All animated elements found:", allAnimatedElements);

  // Add the observer to each of those elements
  allAnimatedElements.forEach((element) => observer.observe(element));

}); 
</script>

<!-- 
{#if showOpener}
  <Opener />
{:else} -->
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
<!-- {/if} -->
