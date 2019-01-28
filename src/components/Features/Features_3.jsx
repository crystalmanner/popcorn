/** @format */

import React, {Component} from 'react';

// Styles
import {Button, Grid, Header, Image, Segment} from 'semantic-ui-react';

import r8 from '../../assets/20181023-R8-1200p.png';

const R8Image = () => <Image src={r8} bordered rounded size="large"/>

class Features_3 extends Component {
  render() {
    return (
      <Segment style={{padding: '8em 0em'}} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{fontSize: '2em'}}>
                We Help Companies Launch Products
              </Header>
              <p style={{fontSize: '1.33em', color: 'black'}}>
                Backed by a company that can help you go from idea to retail with 
                experience producing hundreds-of-thousands of consumer electronic products.
              </p>
              <Header as="h3" style={{fontSize: '2em'}}>
                100% Open Source Hardware
              </Header>
              <p style={{fontSize: '1.33em', color: 'black'}}>
                Based on a proven open design with millions of dollars and 
                man-hours invested in to the hardware and software infrastructure.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <R8Image/>
            </Grid.Column>
          </Grid.Row>
          { /*
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Learn More</Button>
            </Grid.Column>
          </Grid.Row>
             */     }        
        </Grid>
      </Segment>
    );
  }
}

export default Features_3;
