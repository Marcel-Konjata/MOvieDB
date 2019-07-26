import Axios from "axios";

const APIkey = "?api_key=6cd482fbfe7654e38844849abf1268d8";
const baseURL = "https://api.themoviedb.org/3";
const languageQuery = "&language=";
const pageQuery = "&page="
export const IMAGE_BASEURL = "https://image.tmdb.org/t/p/"

// basic fetches for movies and tv show lists
export function TVFetch(requestURL, lang = "en") {
   return Axios.get(`${baseURL}/tv/${requestURL}${APIkey}${languageQuery}${lang}`);
}
export function pagesTVFetch(requestURL, lang = "en", page="1") {
   return Axios.get(`${baseURL}/tv/${requestURL}${APIkey}${languageQuery}${lang}${pageQuery}`);
}
export function movieFetch(requestURL, lang = "en") {
   return Axios.get(`${baseURL}/movie/${requestURL}${APIkey}${languageQuery}${lang}`);
}
export function pagesMovieFetch(requestURL, lang = "en", page="1") {
   return Axios.get(`${baseURL}/movie/${requestURL}${APIkey}${languageQuery}${lang}${pageQuery}`);
}

// fetches for clicked event
