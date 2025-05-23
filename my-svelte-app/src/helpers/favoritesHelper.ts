export function getFavorites() {
  let local = localStorage.getItem("fetch-favorites");
  if (local && local != "null" && local?.trim()?.length > 0) {
    return local.split(",");
  } else {
    return [];
  }
}

export function setFavorites(favorites) {
  localStorage.setItem("fetch-favorites", favorites.toString());
}