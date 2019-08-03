import {Component} from 'react'
// when this component mount atumatically rescroll window to top

export class ScrollToTopOnMount extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  
    render() {
      return null;
    }
  }