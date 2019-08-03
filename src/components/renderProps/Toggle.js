import React from "react";

class Toggle extends React.Component {
   state = { isToggled: false };

   handleToggle = () => {
      this.setState(prevState => {
         const newValue = !prevState.isToggled;
         return { isToggled: newValue };
      });
   };

   render() {
      return this.props.children({
         isToggled: this.state.isToggled,
         toggle: this.handleToggle
      });
   }
}

export default Toggle;
