<script lang="ts">
  import { onMount } from "svelte";
  import Header from "../components/Layout/Header.svelte";
  import Hero from "../components/Cards/Hero.svelte";

  onMount(async () => {});
</script>

<Header></Header>
<main>
  <aside class="left-aside">
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/laureldentinger/"
          aria-label="LinkedIn
          profile of Laurel Dentinger"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin"
            ><path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path><rect x="2" y="9" width="4" height="12"></rect><circle
              cx="4"
              cy="4"
              r="2"
            ></circle></svg
          ></a
        >
      </li>
      <li>
        <a
          href="https://github.com/laurelde"
          aria-label="Github profile of Laurel Dentinger"
          target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
            ><path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path></svg
          ></a
        >
      </li>
      <li>
        <a
          href="mailto:laureledentinger@gmail.com"
          aria-label="Email address for Laurel Dentinger"
          target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
            ><path
              d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
            /></svg
          ></a
        >
      </li>
    </ul>
  </aside>
  <Hero
    subtitle="Hi! I'm Laurel."
    title="I design & build digital experiences."
    description="I'm a UX engineer specializing in creating intuitive, engaging, and accessible digital products that solve real user problems."
  />
</main>
