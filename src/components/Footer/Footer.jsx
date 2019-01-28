/** @format */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Styles
import {Container, Grid, Header, List, Segment} from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical attached="bottom" style={{padding: '5em 0em'}}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as={Link} to="/products">
                    Products
                  </List.Item>
                  {/*
                  <List.Item as={Link} to="/learn">
                    Learn
                  </List.Item>*/}
                  <List.Item as={Link} to="/about">
                    About Us
                  </List.Item>
                  <List.Item as={Link} to="/contact">
                    Contact Us
                  </List.Item>
                </List>
              </Grid.Column>
              {/* <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Pre-Order</List.Item>
                  <List.Item as="a">Source Parts FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite Computer</List.Item>
                </List>
              </Grid.Column> */}
              <Grid.Column width={8}>
                <Header as="h4" inverted>
                  Source Parts Inc. &copy; 2018
                </Header>
                <p>
                  Popcorn Computer is a derivative of C.H.I.P. <br />
                  by Next Thing Co. released under{' '}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/3.0/us/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CC BY-SA 3.0.
                  </a>
                  <br />
                  <br />
                  Popcorn Computer is not affiliated with Next Thing Co.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
