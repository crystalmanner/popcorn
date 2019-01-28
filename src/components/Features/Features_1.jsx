/** @format */

import React, {Component} from 'react';

// Styles
import {Button, Container, Divider, Header, Segment} from 'semantic-ui-react';

class Features1 extends Component {
  render() {
    return (
      <Segment inverted style={{padding: '8em 0em'}} vertical>
        <Container text>
          <Header inverted as="h3" style={{fontSize: '2em'}}>
            What is Popcorn Computer?
          </Header>
          <p style={{fontSize: '1.33em'}}>
            Popcorn Computer is an open computer that you can use to design,
            develop and build new products.
          </p>
          <Button
            as="a"
            size="large"
            href="https://medium.com/@sourceparts/what-is-popcorn-computer-3da43a9e4236"
          >
            Read More
          </Button>
          {/*
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{margin: '3em 0em', textTransform: 'uppercase'}}
          >
            <a href="/">Case Studies</a>
          </Divider>

          <Header inverted as="h3" style={{fontSize: '2em'}}>
            USB-C is the future of Single Board Computers
          </Header>
          <p style={{fontSize: '1.33em'}}>
            Why we believe USB-C will change the game.
          </p>
          <Button as="a" size="large">
            You've seen it here first!
          </Button>
          */}
        </Container>
      </Segment>
    );
  }
}

export default Features1;
