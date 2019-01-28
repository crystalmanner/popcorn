/** @format */

import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react';

import Banner from './Banner/Banner';
import Features1 from './Features/Features_1.jsx';
import Features3 from './Features/Features_3.jsx';

class Home extends Component {
  render() {
    return (
      <>
        <Segment textAlign="center" style={{padding: '1em 0em'}} vertical>
          <Banner />
        </Segment>
        <Features1 />
        <Features3 />
      </>
    );
  }
}

export default Home;
