<script lang="ts">
  import { preventDefault } from "svelte/legacy";

  import TextInput from "../components/Inputs/TextInput.svelte";
  import Button from "../components/Buttons/Button.svelte";
  import Select from "../components/Selects/Select.svelte";
  import { login, logout } from "../api/authentication";
  import { getBreeds } from "../api/dogData";
  import { onMount } from "svelte";

  let name = "";
  let email = "";

  function updateName(e) {
    name = e.detail.value;
  }

  function updateEmail(e) {
    email = e.detail.value;
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      submitLogin();
    }
  });

  async function submitLogin() {
    let successfulLogin = false;
    try {
      let loginFunc = login(name, email).then((response) => {
        window.location.href = "/#/Browse";
        successfulLogin = true;
      });
    } catch {
      console.log(`Login failed for ${name}, ${email}`);
    }
  }

  onMount(async () => {
    try {
      logout();
    } catch {
      console.log("No user logged in");
    }
  });
</script>

<main id="login">
  <div>
    <h1>Fetch Finder</h1>
    <form onsubmit={preventDefault(submitLogin)} method="get">
      <div class="card">
        <TextInput id="name" label="Name" on:valueChanged={updateName} />
        <TextInput id="email" label="Email" on:valueChanged={updateEmail} />
      </div>

      <div class="card">
        <Button label="Login" />
      </div>
    </form>
    <div></div>
  </div>
</main>
