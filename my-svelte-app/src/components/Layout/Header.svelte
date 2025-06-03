<script>
  import LinkButton from "../Buttons/LinkButton.svelte";
  import { logout } from "../../api/authentication";
  import { onMount } from "svelte";
  import "../../styles/header.scss";
  import { Hamburger } from 'svelte-hamburgers';
  import { fly } from 'svelte/transition';

  let open = $state(false);
  let mobile = $state(false);

  onMount(async() => {
    // Check if the viewport width is less than or equal to 768px
    mobile = window.innerWidth <= 599;

    // Add an event listener to handle window resize
    window.addEventListener('resize', () => {
      mobile = window.innerWidth <= 599;
    });

    window.addEventListener('scroll', function(event) {
      // This function will be executed whenever the window is scrolled.
      open = false;
      console.log('Window scrolled!');
    });

    // Cleanup the event listener on component destroy
    return () => {
      window.removeEventListener('resize', () => {
        mobile = window.innerWidth <= 599;
      });
    };
  })
</script>
{#if mobile}
  <header class="fade-in mobile-header">
    <nav>
      <Hamburger
          bind:open
          type="collapse"
          title="Toggle nav links"
          ariaControls="nav"
      />

      {#if open}
          <ul id="nav" class="menu" transition:fly={{ y: -15 }}>
            <LinkButton theme="" href="/#about" label="About"></LinkButton>
            <LinkButton theme="" href="/#work" label="Work"></LinkButton>
            <LinkButton theme="" href="/#projects" label="Projects"></LinkButton>
            <LinkButton
              theme="mdc-button--raised mdc-button--touch"
              href="/#contact"
              label="Connect"
            ></LinkButton>
          </ul>
      {/if}
    </nav>
  </header>
{:else}
<header class="fade-in desktop-header">
    <nav class="row align-right main-content">
      <LinkButton theme="" href="/#about" label="About"></LinkButton>
      <LinkButton theme="" href="/#work" label="Work"></LinkButton>
      <LinkButton theme="" href="/#projects" label="Projects"></LinkButton>
      <LinkButton
        theme="mdc-button--raised mdc-button--touch"
        href="/#contact"
        label="Connect"
      ></LinkButton>
    </nav>
  </header>
{/if}
