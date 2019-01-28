/** @format */

import React, {Component} from 'react';

// Styles
import {Grid, Header, Image, Segment} from 'semantic-ui-react';

class Features2 extends Component {
  render() {
    return (
      <Segment style={{padding: '0em'}} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
              <Header as="h3" style={{fontSize: '2em'}}>
                "What a Company"
              </Header>
              <p style={{fontSize: '1.33em', color: 'black'}}>
                That is what they all say about us
              </p>
            </Grid.Column>
            <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
              <Header as="h3" style={{fontSize: '2em'}}>
                "Popcorn computers everywhere"
              </Header>
              <p style={{fontSize: '1.33em', color: 'black'}}>
                <Image avatar src="/images/avatar/large/nan.jpg" />
                <b /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Features2;
