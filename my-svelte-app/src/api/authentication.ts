import { fetchPost } from "../helpers/apiHelper";

const baseUrl = "https://frontend-take-home-service.fetch.com";

export async function login(name, email) {
  let body = {
    name: name,
    email: email,
  };
  let url = baseUrl + "/auth/login";
  return await fetchPost(url, body, false);
}

export async function logout() {
  let url = baseUrl + "/auth/logout";
    try {
      let response = await fetch(url, {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(
          `Fetch Post Call Failed for ${url}, response: ${response.statusText}`
        );
      }
      return response.ok;
    } catch (error) {
      console.log(error);
    }
  }
