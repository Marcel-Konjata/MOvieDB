import React from "react";

function SelectionMenu(props) {
   if ((props.lang = "cs")) {
      return (
         <div>
            <ul>
               <li>oblibene </li>
               <li>nejlepe hodnocene </li>
               <span>
                  <li>prave v kinech </li>
                  <li>vyjde</li>
               </span>
            </ul>
         </div>
      );
   }
   if ((props.lang = "en")) {
      return (
         <div>
            <ul>
               <li>popular </li>
               <li>top rated </li>
               <span>
                  <li> in cinemas </li>
                  <li>upcoming</li>
               </span>
            </ul>
         </div>
      );
   }
}

export default SelectionMenu;
