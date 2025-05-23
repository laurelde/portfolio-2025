<script lang="ts">
  import TextInput from "../components/Inputs/TextInput.svelte";
  import Button from "../components/Buttons/Button.svelte";
  import Select from "../components/Selects/Select.svelte";
  import { getBreeds, getDogIds, getDogProfiles } from "../api/dogData";
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
  import LoadingCard from "../components/Cards/LoadingCard.svelte";

  let dogBreeds = $state([]);
  let dogIds = [];
  let dogProfiles = $state([]);
  let nextLink = $state(null);
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
  let errorMessage = $state(null);
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
  async function search() {
    searchLoading = true;
    try {
      let dogIdsResult = await getDogIds(
        breed,
        zipCode,
        ageMin,
        ageMax,
        size,
        0,
        sortField,
        sortDir
      );
      await setDogData(dogIdsResult);
      searchLoading = false;
    } catch (e) {
      searchLoading = false;
    }
  }

  async function setDogData(result) {
    dogIds = result["resultIds"];
    nextLink = result["next"];
    totalNumberOfDogs = result["total"];
    let parsedNextLink = await parseQueryString(nextLink);
    from = parsedNextLink["from"];
    // Make sure next link actually has data
    if (Number(from) > totalNumberOfDogs) {
      nextLink = null;
    }
    dogProfiles = await getDogProfiles(dogIds);
  }

  function updateZipCode(e) {
    zipCode = e.detail.value;
  }

  function updateBreed(e) {
    breed = e.detail.selectedOption;
  }

  function updateMinAge(e) {
    ageMin = e.detail.selectedOption;
  }

  function updateMaxAge(e) {
    ageMax = e.detail.selectedOption;
  }

  function updateSort(e) {
    sortField = e.detail.value;
    sortDir = e.detail.sortAsc ? "asc" : "desc";
    search();
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

  async function nextPage() {
    if (nextLink) {
      let nextResult = await getNext(nextLink);
      setDogData(nextResult);
    } else {
      return;
    }
  }

  async function goToLogin() {
    await logout();
  }

  onMount(async () => {
    // Populate Dog Breed Dropdown
    try {
      dogBreeds = await getBreeds();
      favoritesList = getFavorites();
    } catch (e) {
      errorMessage =
        "There was an issue retrieving the data, please log in and try again.";
    }

    await search();
  });
</script>

<main>
  <Header></Header>
  <div class="core-content">
    <h1 class="row">Browse Adoptable Dogs</h1>
    <aside>
      <h2>Filter + Sort</h2>
      <h3>{totalNumberOfDogs ? totalNumberOfDogs : "0"} dogs found</h3>
      <div class="aside-filters">
        {#key dogBreeds}
          <Select
            id="dogBreedDropdown"
            label="Breed"
            options={dogBreeds}
            on:valueChanged={updateBreed}
          />
        {/key}

        <TextInput
          id="zipCodeInput"
          label="Zip Code"
          on:valueChanged={updateZipCode}
        />
        {#key ages}
          <Select
            id="ageMinDropdown"
            label="Minimum Age"
            options={ages}
            on:valueChanged={updateMinAge}
          />
        {/key}
        {#key ages}
          <Select
            id="ageMaxDropdown"
            label="Maxiumum Age"
            options={ages}
            on:valueChanged={updateMaxAge}
          />
        {/key}
      </div>
      <div class="align-center">
        <Button label="Search" on:click={search} />
      </div>
    </aside>
    <div class="browse main">
      <!-- {#if searchLoading}
        <div class="grid-4-col">
          <LoadingCard></LoadingCard>
          <LoadingCard></LoadingCard>
          <LoadingCard></LoadingCard>
          <LoadingCard></LoadingCard>
        </div>
      {:else if errorMessage} -->
      {#if errorMessage}
        <div class="error-message">
          <h2>
            {errorMessage}
          </h2>
        </div>
      {:else if !searchLoading && totalNumberOfDogs < 1}
        <div class="error-message">
          <h2>
            Sorry, no dogs match the criteria you searched by! Adjust your
            search filters and try again.
          </h2>
        </div>
      {:else if dogProfiles.length > 0}
        {#if nextLink}
          <div class="row sort">
            {#key toggleOptions}
              <ToggleButton
                {toggleOptions}
                label="Sort"
                on:toggleClicked={updateSort}
              ></ToggleButton>
            {/key}
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
