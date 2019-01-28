/** @format */

import React, {Component} from 'react';
import {Grid, Image, Statistic, Header} from 'semantic-ui-react';

import PopcornFeatures from './PopcornFeatures.jsx';

import PopcornIso from '../assets/popcorn-iso.JPG';
import PopcornFacing from '../assets/popcorn-connector-facing.jpg';

const PopcornIsoImage = () => <Image size="large" centered src={PopcornIso} />;
const PopcornFacingImage = () => (
  <Image size="big" centered src={PopcornFacing} />
);

class Products extends Component {
  render() {
    return (
      <>
       <Header as="h1" textAlign='center'>The Original Popcorn Computer</Header>
        <Grid columns={2} verticalAlign="middle" padded relaxed stackable>
          <Grid.Row>
            <Grid.Column width="2">
            </Grid.Column>
            <Grid.Column width="6">
              <PopcornFeatures />
            </Grid.Column>
            <Grid.Column width="8">
              <PopcornIsoImage />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Statistic.Group widths='three'>
            <Statistic>
              <Statistic.Value>1 GHZ</Statistic.Value>
              <Statistic.Label>Processor Speed</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>512 MB</Statistic.Value>
              <Statistic.Label>RAM</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>32 GB</Statistic.Value>
              <Statistic.Label>Memory Storage</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        <PopcornFacingImage />
      </>
    );
  }
}

export default Products;
