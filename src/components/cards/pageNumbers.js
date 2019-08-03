import React from "react";
import styled from "styled-components";
import { menuGreen } from "Styled/colors";

function PageNumbers({ pages = 100, activePage = 1, setPage }) {
   return (
      <Pagination>
         <button
            onClick={() => {
               activePage > 1 && setPage(1);
            }}
         >
            prvni
         </button>
         {renderPageNumbers({ pages, activePage, setPage })}
         <button
            onClick={() => {
               activePage < pages && setPage(pages);
            }}
         >
            posledni
         </button>
      </Pagination>
   );
}
//pagination created by for loop in react? well little imperative aproach doesnt hurt

// still very performant
function renderPageNumbers({ pages, activePage, setPage }) {
   const buttons = [];

   if (pages <= 10) {
      for (let number = 1; number <= pages; number++) {
         buttons.push(
            <ListButton key={number} number={number} handlePage={setPage} active={activePage} />
         );
      }
   } else {
      if (activePage > 2 && pages > 4 && activePage + 2 < pages) {
         for (let number = activePage - 2; number <= activePage + 2; number++) {
            buttons.push(
               <ListButton key={number} number={number} handlePage={setPage} active={activePage} />
            );
         }
      } else if (activePage <= 2) {
         for (let number = 1; number <= 5; number++) {
            buttons.push(
               <ListButton key={number} number={number} handlePage={setPage} active={activePage} />
            );
         }
      } else if (
         activePage + 2 === pages ||
         activePage + 1 === pages ||
         activePage === pages
      ) {
         for (let number = pages - 5; number <= pages; number++) {
            buttons.push(
               <ListButton key={number} number={number} handlePage={setPage} active={activePage} />
            );
         }
      }
   }

   return buttons;
}

function ListButton({ number, handlePage, active }) {
   return (
      <button value={number} onClick={() => handlePage(number)} className={active===number? "active" : ''}>
         {number}
      </button>
   );
}

export default PageNumbers;

const Pagination = styled.div`
text-align:center;
button{
   cursor: pointer;
   padding: 5px 8px;
   border: 1px solid ${menuGreen};
   color: ${menuGreen};
   background:transparent;
   font-size: 15px;
   transition: all .2s ease-in;
   &:not(:first-child){
      margin-left: 5px;
   }
   &.active, &:hover{
      background: ${menuGreen};
      color:black;
   }
   &:focus{
      outline:none;
   }


}
`