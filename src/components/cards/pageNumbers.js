import React from "react";

function PageNumbers({ pages = 100, activePage = 1 }) {
   const [getPage, setPage] = React.useState(activePage);

   const renderPageNumbers = () => {
      const buttons = [];

        if(pages <= 10){
            for (let number = 1; number <= pages; number++) {
            buttons.push(<button key={number}>{number}</button>);
         }
        }
        else{

            if (activePage > 2 && pages > 4 && activePage + 2 !== pages) {
               for (let number = activePage - 2; number <= activePage + 2; number++) {
                  buttons.push(<button key={number}>{number}</button>);
               }
            }
            else if(activePage <2){
                for (let number = 1; number <= 5; number++) {
                  buttons.push(<button key={number}>{number}</button>);
               }
            }

            else if(activePage + 2 <=pages ){
                for (let number = pages - 5; number <=pages; number++){
                    buttons.push(<button key={number}>{number}</button>);
                }
            }
        }
      
      return buttons;
   };
   return (
      <div>
         <button>prvni</button>
         {renderPageNumbers()}
         <button>posledni</button>
      </div>
   );
}

export default PageNumbers;
