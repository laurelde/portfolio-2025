<script lang="ts">
  import TextInput from "../components/Inputs/TextInput.svelte";
  import Button from "../components/Buttons/Button.svelte";
  import Select from "../components/Selects/Select.svelte";
  import {
    getBreeds,
    getDogIds,
    getDogProfiles,
    getMatch,
  } from "../api/dogData";
  import { logout } from "../api/authentication";
  import { getNext } from "../api/dogData";
  import { getFavorites, setFavorites } from "../helpers/favoritesHelper";
  import { parseQueryString } from "../helpers/formatHelper";
  import { onMount } from "svelte";
  import InfoCard from "../components/Cards/InfoCard.svelte";
  import "../styles/layouts.scss";
  import LinkButton from "../components/Buttons/LinkButton.svelte";
  import ToggleButton from "../components/Buttons/ToggleButton.svelte";
  import Header from "../components/Layout/Header.svelte";
  import Dialog from "../components/Layout/Dialog.svelte";

  let dogBreeds = [];
  let dogIds = [];
  let dogProfiles = $state([]);
  let nextLink = null;
  let breed = "";
  let zipCode = "";
  let ageMin = 0;
  let ageMax = 20;
  let size = "";
  let from = "";
  let ages = [...Array(21).keys().map(String)];
  let sortField = null;
  let sortDir = "asc";
  let totalNumberOfDogs = $state(null);
  let favoritesList = $state([]);
  let match = null;
  let matchInfo = $state(null);
  let matchDialogOpen = $state(false);
  let searchLoading = $state(true);
  let toggleOptions = [
    {
      id: "breed",
      label: "breed",
    },
    {
      id: "name",
      label: "name",
    },
    {
      id: "age",
      label: "age",
    },
  ];

  // Call to search for dog IDs and then profiles based on current filters
  // async function search() {
  //   try {
  //     let dogIdsResult = await getDogIds(
  //       breed,
  //       zipCode,
  //       ageMin,
  //       ageMax,
  //       size,
  //       0,
  //       sortField,
  //       sortDir
  //     );
  //     setDogData(dogIdsResult);
  //   } catch (e) {
  //     console.log(`Error getting dog Ids`, e);
  //   }
  // }

  async function setDogData(result) {
    totalNumberOfDogs = result.length;
    dogProfiles = await getDogProfiles(result);
  }

  async function showMatchDialog() {
    await assignMatch();
    matchDialogOpen = true;
  }

  function hideMatchDialog() {
    matchDialogOpen = false;
  }

  async function nextPage() {
    if (nextLink) {
      let nextResult = await getNext(nextLink);
      setDogData(nextResult);
    } else {
      return;
    }
  }

  function updateSort(e) {
    sortField = e.detail.value;
    sortDir = e.detail.sortAsc ? "asc" : "desc";
  }

  function updateFavorites(e) {
    let addFavorite = e.detail.favorite;
    let id = e.detail.id;

    if (addFavorite) {
      favoritesList.push(id);
      setFavorites(favoritesList);
    } else {
      const index = favoritesList.indexOf(id);
      if (index > -1) {
        favoritesList = favoritesList.filter((e) => e !== id);
        setFavorites(favoritesList);
      }
    }
  }

  async function assignMatch() {
    match = await getMatch(favoritesList);
    matchInfo = await getDogProfiles([match["match"]]);
  }

  onMount(async () => {
    // Populate Dog Breed Dropdown
    try {
      searchLoading = true;
      favoritesList = getFavorites();
      let setData = await setDogData(favoritesList);
      searchLoading = false;
    } catch (e) {}
  });
</script>

<main>
  <Header />
  <div class="core-content">
    <h1 class="row">My Favorite Dogs</h1>
    <div class="row align-center">
      <Button label="Get My Match" on:click={showMatchDialog}></Button>
    </div>
    <div class="favorites main">
      <div></div>
      {#if searchLoading}
        <div class="error-message">
          <span class="loader"></span>
        </div>
      {:else if totalNumberOfDogs < 1}
        <div class="error-message">
          <h2>
            You haven't favorited any dogs yet! Go back to the Browse page and
            click on a dog to favorite it.
          </h2>
        </div>
      {:else if dogProfiles.length > 0}
        {#if nextLink}
          <div class="row align-right">
            <Button label="Next Page" on:click={nextPage}></Button>
          </div>
        {/if}
        <div class="grid-4-col">
          {#key dogProfiles}
            {#each dogProfiles as dog}
              <InfoCard
                title={dog.name}
                imgSrc={dog.img}
                id={dog.id}
                favorite={favoritesList?.includes(dog.id)}
                on:favorited={updateFavorites}
              >
                {#snippet descriptionSlot()}
                                        <div >
                    <dl>
                      <span class="info-list"
                        ><dt>Breed:</dt>
                        <dd>{dog.breed}</dd>
                        <dt>Age:</dt>
                        <dd>{dog.age}</dd>
                        <dt>ZipCode:</dt>
                        <dd>{dog.zip_code}</dd>
                      </span>
                    </dl>
                  </div>
                                      {/snippet}
              </InfoCard>
            {/each}
          {/key}
        </div>
        {#if nextLink}
          <div class="row align-right">
            <Button label="Next Page" on:click={nextPage}></Button>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</main>
{#if matchInfo}
  <Dialog
    id="matchDialog"
    open={matchDialogOpen}
    title={`Your Match is... ${matchInfo[0]?.name}!`}
    on:dialogClosed={hideMatchDialog}
  >
    {#snippet contentSlot()}
        <div >
        <div class="match">
          {#if matchInfo}
            <InfoCard
              title={matchInfo[0].name}
              imgSrc={matchInfo[0].img}
              id={matchInfo[0].id}
              favorite={favoritesList?.includes(matchInfo[0].id)}
              on:favorited={updateFavorites}
            >
              {#snippet descriptionSlot()}
                        <div >
                  <dl>
                    <span class="info-list"
                      ><dt>Breed:</dt>
                      <dd>{matchInfo[0].breed}</dd>
                      <dt>Age:</dt>
                      <dd>{matchInfo[0].age}</dd>
                      <dt>ZipCode:</dt>
                      <dd>{matchInfo[0].zip_code}</dd></span
                    >
                  </dl>
                </div>
                      {/snippet}
            </InfoCard>
          {:else}
            <h3>
              We didn't find a match for you this time! Favorite more dogs and try
              again.
            </h3>
          {/if}
        </div>
      </div>
      {/snippet}
  </Dialog>
{/if}
