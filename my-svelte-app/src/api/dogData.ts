import { fetchGet, fetchPost } from "../helpers/apiHelper";

const baseUrl = "https://frontend-take-home-service.fetch.com";

export async function getBreeds() {
  let url = baseUrl + "/dogs/breeds";
  return await fetchGet(url);
}

export async function getDogIds(breeds, zipCodes, ageMin, ageMax, size, from, sortField, sortDir) {
  let url = baseUrl + `/dogs/search?`;
  url += breeds ? `breeds=${breeds}` : "";
  url += zipCodes ? `&zipCodes=${zipCodes}` : "";
  url += ageMin ? `&ageMin=${ageMin}` : "";
  url += ageMax ? `&ageMax=${ageMax}` : "";
  url += size ? `&size=${size}` : "";
  url += from ? `&from=${from}` : "";
  url += sortField && sortDir ? `&sort=${sortField}:${sortDir}` : "";
  return await fetchGet(url);
}

export async function getDogProfiles(ids) {
  let url = baseUrl + "/dogs";
  return await fetchPost(url, ids);
}

export async function getNext(urlIn) {
  let url = baseUrl + urlIn;
  return await fetchGet(url);
}

export async function getMatch(favoriteIds) {
  let url = baseUrl + "/dogs/match";
  return await fetchPost(url, favoriteIds);
}