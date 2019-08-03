import  { Component } from "react";
import ReactDOM from "react-dom";

//must match div or element to redner to, in public I created div with id videoPortal
//select it via clasic dom
const PROTAL_ROOT = document.getElementById("videoPortal");

export default class Portal extends Component {
   constructor(props) {
      super(props);
      //this is necessary to create element in DOM at not a Virtual one
      this.element = document.createElement("div");
   }
   // we need to call unmoun mount lifecycle method and apped/remove this element to portal root

   componentDidMount() {
      PROTAL_ROOT.appendChild(this.element);
   }

   componentWillUnmount() {
      PROTAL_ROOT.removeChild(this.element);
   }

   render() {
      const { children } = this.props;
      return ReactDOM.createPortal(children, this.element);
   }
}
