/** @format */

import React, {Component} from 'react';
import {Header, Grid, Image, Container} from 'semantic-ui-react';

import SourcePartsTextLogo from '../assets/source_parts_logo_text.jpg';

const SourcePartsTextLogoImage = () => (
  <Image centered size="large" src={SourcePartsTextLogo} />
);

class About extends Component {
  render() {
    return (
      <Grid centered columns={1} padded>
        <Grid.Row>
          <Grid.Column tablet="14" computer="8">
            <SourcePartsTextLogoImage />
            <br/>
            <Container text textAlign="justified">
              <Header as="h2">Who Makes Popcorn Computer?</Header> 
              <p>
                <br/>At Source Parts, we have sourced,
                designed, assembled and tested tens of thousands of parts and
                completed products for our customers. Source Parts is an American
                company with main operations in and surrounding the Hua Qiang Bei electronics
                markets in Shenzhen, China. We have direct access and insight
                over the complete supply-chain for the longevity of the products
                and parts that we design, source, build and ship.
              </p>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default About;
