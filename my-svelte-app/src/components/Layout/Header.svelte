<script>
  import LinkButton from "../Buttons/LinkButton.svelte";
  import { logout } from "../../api/authentication";
</script>

<header>
  <div class="row align-right">
    <LinkButton theme="" href="/#/About" label="About"></LinkButton>
    <LinkButton theme="" href="/#/Work" label="Work"></LinkButton>
    <LinkButton
      theme="mdc-button--raised mdc-button--touch"
      href="/#/Contact"
      label="Connect"
    ></LinkButton>
  </div>
</header>
