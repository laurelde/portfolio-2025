<script lang="ts">
  import { onMount } from "svelte";
  import Header from "../components/Layout/Header.svelte";
  import Hero from "../components/Cards/Hero.svelte";
  import Footer from "./Footer.svelte";
  import About from "./Sections/About.svelte";
  import Work from "./Sections/Work.svelte";
  import Contact from "./Sections/Contact.svelte";  
  import Projects from "./Sections/Projects.svelte";
  import "../styles/landing-loader.scss";
  import Opener from "../components/Cards/Opener.svelte";
  import logo_light from "../assets/images/logo_light.svg";
  import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    
  let showOpener = true;
  let { classes }: string = $props();

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

<div class={`landing-loader ${classes}`}>
   <svg class="logo-light animate" xmlns="http://www.w3.org/2000/svg" width="76" height="78" viewBox="0 0 76 78" fill="none">
    <path transition:draw="{{duration: 1500}}" d="M27.1172 41.9336C27.5312 41.9336 27.7383 42.1094 27.7383 42.4609C27.7383 42.6016 27.6523 42.7266 27.4805 42.8359C27.3164 42.9453 27.0195 43 26.5898 43H17.0742V26.418H23.0508V42.2266H25.2422C25.7344 42.2266 26.1562 42.1797 26.5078 42.0859C26.8672 41.9844 27.0703 41.9336 27.1172 41.9336ZM40.2656 41.9922C40.6641 41.9922 40.8633 42.1484 40.8633 42.4609C40.8633 42.6016 40.7773 42.7266 40.6055 42.8359C40.4336 42.9453 40.1367 43 39.7148 43H29.7891V26.418C32.8672 26.418 35.9453 26.418 39.0234 26.418L39.9844 26.3828C40.5703 26.3828 40.8633 26.5547 40.8633 26.8984C40.8633 27.0312 40.8125 27.1562 40.7109 27.2734C40.6172 27.3828 40.5078 27.4375 40.3828 27.4375C40.1797 27.4375 39.9648 27.4141 39.7383 27.3672C39.4023 27.2969 38.9414 27.2617 38.3555 27.2617H35.7656V30.8359H37.8984C37.8984 30.8359 38.3789 30.8164 39.3398 30.7773C39.5117 30.7773 39.6562 30.8203 39.7734 30.9062C39.8984 30.9844 39.9609 31.0977 39.9609 31.2461C39.9609 31.5742 39.7422 31.7383 39.3047 31.7383L38.8008 31.7266C38.543 31.7031 38.3281 31.6914 38.1562 31.6914H35.7656V42.1445H38.3555C38.9336 42.1445 39.3438 42.1211 39.5859 42.0742C39.875 42.0195 40.1016 41.9922 40.2656 41.9922ZM44.0039 26.418H48.8789C51.1523 26.418 52.8203 26.5781 53.8828 26.8984C55.0938 27.2734 56.0273 27.7539 56.6836 28.3398C57.3477 28.9258 57.8672 29.5312 58.2422 30.1562C59.0078 31.4297 59.3906 32.875 59.3906 34.4922C59.3906 37.0391 58.4766 39.1016 56.6484 40.6797C55.3516 41.8125 53.8242 42.5117 52.0664 42.7773C51.0898 42.9258 49.7227 43 47.9648 43H44.0039V26.418ZM49.9805 42.0273C50.1055 42.0352 50.2188 42.0391 50.3203 42.0391H50.5898C52.707 42.0391 54.5156 41.3789 56.0156 40.0586C57.6016 38.668 58.3945 36.8203 58.3945 34.5156C58.3945 33.0625 58.0469 31.7539 57.3516 30.5898C56.3438 28.8945 54.75 27.8672 52.5703 27.5078C51.8594 27.3906 50.9961 27.3242 49.9805 27.3086V42.0273Z" fill="#E6D4FF"/>
    <g filter="url(#filter0_d_10_32)">
      <path transition:draw="{{duration: 1500}}" d="M68.4092 19.001V50.998L38 67.168L7.59082 50.998V19.001L38 2.83105L68.4092 19.001Z" stroke="#E6D4FF" stroke-width="5" shape-rendering="crispEdges"/>
      <path transition:draw="{{duration: 1500}}" d="M68.4092 19.001V50.998L38 67.168L7.59082 50.998V19.001L38 2.83105L68.4092 19.001Z" stroke="#E6D4FF" stroke-width="5" shape-rendering="crispEdges"/>
    </g>
      <defs>
        <filter id="filter0_d_10_32" x="1.09106" y="0" width="73.8179" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_32"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_32" result="shape"/>
        </filter>
      </defs>
    </svg>
</div>
