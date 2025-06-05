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
  import LandingLoader from "./LandingLoader.svelte";
    
  let showLoader = true;
    

  onMount(async() => {
    // check if URL has hash
    if (window.location.hash) {
      // If it does, scroll to the element with that ID
      showLoader = false;
    }

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
  setTimeout(() => {
      showLoader = false;
    }, 5000);
  }); 
</script>


  <LandingLoader classes={`${showLoader ? "" : "hide"}`}/>
  {#if !showLoader}
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
