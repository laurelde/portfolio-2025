<script>
  import LinkButton from "../Buttons/LinkButton.svelte";
  import { logout } from "../../api/authentication";
</script>

<header>
  <div class="row align-right">
    <LinkButton theme="" href="/#/Browse" label="Browse"></LinkButton>
    <LinkButton theme="" href="/#/Favorites" label="Favorites"></LinkButton>
    <LinkButton theme="" href="/#/Login" label="Logout" on:click={logout}
    ></LinkButton>
  </div>
</header>
