import Axios from "axios";
let today = new Date();
let thisYear = today.getFullYear();
const APIkey = "?api_key=6cd482fbfe7654e38844849abf1268d8";
const baseURL = "https://api.themoviedb.org/3";
const languageQuery = "&language=";
const pageQuery = "&page=";
export const IMAGE_BASEURL = "https://image.tmdb.org/t/p/";

// basic fetches for movies and tv show lists
export function TVFetch(requestURL, lang = "en") {
   return Axios.get(
      `${baseURL}/tv/${requestURL}${APIkey}${languageQuery}${lang}`
   );
}

export function movieFetch(requestURL, lang = "en") {
   return Axios.get(
      `${baseURL}/movie/${requestURL}${APIkey}${languageQuery}${lang}`
   );
}

export function dataFetch(media, searchType, lang = "en", page = "1") {
   if (searchType.toLowerCase() === "discover")
      return Axios.get(
         `${baseURL}/discover/${media}${APIkey}${languageQuery}${lang}&sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=${thisYear}`
      );
   else
      return Axios.get(
         `${baseURL}/${media}/${searchType}${APIkey}${languageQuery}${lang}${pageQuery}${page}`
      );
}

// fetches for clicked detail

export function getDetails(media, id, lang = "en") {
   return Axios.get(
      `${baseURL}/${media}/${id}${APIkey}${languageQuery}${lang}`
   );
}

export function getCredits(media, id) {
   return Axios.get(`${baseURL}/${media}/${id}/credits${APIkey}`);
}

export function getRecomended(media, id) {
   return Axios.get(`${baseURL}/${media}/${id}/recommendations${APIkey}`);
}

export function getTrailer(media, id) {
   return Axios.get(`${baseURL}/${media}/${id}/videos${APIkey}`);
}

export function getSearchResults(media, keyword, lang = "en") {
   return Axios.get(
      `${baseURL}/search/${media}${APIkey}&language=${lang}&query=${keyword}&page=1&include_adult=false`
   );
}
