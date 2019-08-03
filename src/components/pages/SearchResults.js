import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getSearchResults } from "dataFetch";
import { Link } from "react-router-dom";

function SearchResults(props, { lang = "en" }) {
   const [movieList, setMovieList] = useState([]);
   const [TVList, setTVList] = useState([]);

   let { keyword } = props.match.params;

   useEffect(() => {
      (async () => {
         let MoviesResponse = await getSearchResults("movie", keyword);
         let TVResponse = await getSearchResults("tv", keyword);

         setMovieList(MoviesResponse.data.results);
         setTVList(TVResponse.data.results);
      })();
   }, [keyword]);

   console.log(movieList);
   return (
      <div>
         <MainHeader>
            {lang === "en" ? "Search Results" : "Výsledky Vyhledávání"}
         </MainHeader>
         <StyledResults>
            {movieList.length > 0 && (
               <ResultGrid>
                  <h2>{lang === "en" ? "Movies" : "Filmy"}</h2>
                  <ul className="result-list">
                     {movieList.map(item => (
                        <li key={item.id}>
                           <Link to={`/movie/detail/${item.id}`}>
                              {item.title}
                           </Link>
                           <Link to={`/movie/detail/${item.id}`}>
                              <img
                                 src={`${"https://image.tmdb.org/t/p/"}/w154${
                                    item.backdrop_path
                                 }`}
                                 alt={item.title}
                              />
                           </Link>
                        </li>
                     ))}
                  </ul>
               </ResultGrid>
            )}
            {TVList.length > 0 && (
               <ResultGrid>
                  <h2>{lang === "en" ? "TV shows" : "Seriály"}</h2>
                  <ul className="result-list">
                     {TVList.map(item => (
                        <li key={item.id}>
                           <Link to={`/tv/detail/${item.id}`}>{item.name}</Link>
                           <Link to={`/tv/detail/${item.id}`}>
                              <img
                                 src={`${"https://image.tmdb.org/t/p/"}/w154${
                                    item.backdrop_path
                                 }`}
                                 alt={item.name}
                              />
                           </Link>
                        </li>
                     ))}
                  </ul>
               </ResultGrid>
            )}
            {TVList.length <= 0 && movieList.length <= 0 ? (
               <h2>{lang === "en" ? "No Results" : "Výsledky Nenalezeny"}</h2>
            ) : null}
         </StyledResults>
      </div>
   );
}

export default SearchResults;

const StyledResults = styled.section`
   display: flex;
   max-width: 1400px;
   justify-content: center;
   margin: 50px auto;
   @media (max-width: 771px) {
      flex-direction: column;
      align-items: center;
   }
   h2 {
      text-align: center;
   }
   .result-list {
      list-style: none;
      li {
         font-size: 20px;
         margin-top: 14px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         img {
            font-size: 10px;
         }
      }
   }
`;
const MainHeader = styled.h1`
   text-align: center;
   margin-top: 30px;
`;
const ResultGrid = styled.div`
   flex-basis: 50%;
   padding: 50px;
`;
