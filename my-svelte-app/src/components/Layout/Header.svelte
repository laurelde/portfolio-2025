<script>
  import LinkButton from "../Buttons/LinkButton.svelte";
  import { logout } from "../../api/authentication";
  import "../../styles/header.scss";
</script>

<header class="fade-in">
  <div class="row align-right">
    <LinkButton theme="" href="/#about" label="About"></LinkButton>
    <LinkButton theme="" href="/#work" label="Work"></LinkButton>
    <LinkButton theme="" href="/#projects" label="Projects"></LinkButton>
    <LinkButton
      theme="mdc-button--raised mdc-button--touch"
      href="/#contact"
      label="Connect"
    ></LinkButton>
  </div>
</header>
