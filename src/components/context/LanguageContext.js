import React, { createContext, Component } from "react";


const LanguageContext = createContext();

export class LangProvider extends Component {
   state = {
      localization: "cs"
   };

   changeLang = value => {
      this.setState({ localization: value });
   };
   render() {
      return (
         <LanguageContext.Provider
            value={{
               language: this.state.localization,
               changeLang: this.changeLang
            }}
         >
            {this.props.children}
         </LanguageContext.Provider>
      );
   }
}

export const Localization = LanguageContext.Consumer;
