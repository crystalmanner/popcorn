/** @format */

import React, {Component} from 'react';
import ReactGA from 'react-ga';

import DesktopContainer from './components/Banner/Desktop';
import MobileContainer from './components/Banner/Mobile';
// import NavBar from './components/NavBar/NavBar';
// import Banner from './components/Banner/Banner.jsx';
// import PreOrder from './components/PreOrder/PreOrder';
import Footer from './components/Footer/Footer.jsx';

class App extends Component {
  componentDidMount() {
    initGA();
    logPageView();
  }
  render() {
    return (
      <>
        <DesktopContainer>
          {/* <NavBar /> */}
          {/* <Banner /> */}
          {this.props.children}
          {/* <PreOrder /> */}
        </DesktopContainer>
        <MobileContainer>
          {/* <NavBar /> */}
          {/* <Banner /> */}
          {this.props.children}
          {/* <PreOrder /> */}
        </MobileContainer>
        <Footer />
      </>
    );
  }
}

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-119025238-1');
};

export const logPageView = () => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
};

export default App;
