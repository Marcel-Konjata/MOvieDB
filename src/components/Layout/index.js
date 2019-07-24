import React from "react";
import MainHeader from "./MainHeader";
import SearchBar from "./SearchBar";
import MainFooter from "./MainFooter";

export default class Layout extends React.Component {
   render() {
      return (
         <React.Fragment>
            <MainHeader />
            <SearchBar />
            <main>{this.props.children}</main>
            <MainFooter />
         </React.Fragment>
      );
   }
}
