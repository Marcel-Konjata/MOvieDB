import React from "react";
import styled from "styled-components";

function SearchBar() {
   const [searchValue, setSearchValue] = React.useState("");
   console.log(searchValue)
   function handleSubmit(event){
     event.preventDefault();
     // push search into browser router history it will redirect to search page with params for fetch
   }
   return (
      <StyledSearch>
         <form onSubmit={e=>handleSubmit(e)}>
            <input
               type={Text}
               placeholder="vyhledat film/serial"
               value={searchValue}
               onChange={e => setSearchValue(e.target.value)}
            />
            <button> vyhledat</button>
         </form>
      </StyledSearch>
   );
}

export default SearchBar;

const StyledSearch = styled.div`
   padding: 10px;

   background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(17, 16, 16, 1) 21%,
      rgba(255, 255, 255, 1) 37%,
      rgba(254, 254, 254, 1) 58%,
      rgba(0, 0, 0, 1) 76%,
      rgba(0, 0, 0, 1) 84%,
      rgba(0, 0, 0, 1) 100%
   );

   form{
       display: flex;
       justify-content: center;
       align-items: center;
   }
`;

