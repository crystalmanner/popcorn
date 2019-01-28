/** @format */

import React, {Component} from 'react';
import Typed from 'typed.js';
import {Link, Element, Events, scroller} from 'react-scroll';

// Styles
import styled from 'styled-components/macro';
import {Container, Header, Image} from 'semantic-ui-react';
import arrowIcon from '../../assets/arrow.png';
import allSidesView from '../../assets/popcorn-top-side-bottom.jpg';

const Arrow = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-image: url(${arrowIcon});
  background-size: contain;
`;

const BannerBackgroundImage = () => <Image src={allSidesView} fluid />;

class Banner extends Component {
  componentDidMount() {
    const options = {
      strings: ['LEARN. DESIGN. BUILD. LAUNCH.'],
      typeSpeed: 100,
      // backSpeed: 25,
      loop: false,
    };
    this.typed = new Typed(this.el, options);

    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });
  }

  componentWillUnmount() {
    this.typed.destroy();
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }

  render() {
    return (
      <Container>
        <BannerBackgroundImage />
        <Header
          as="h2"
          className="banner_text_secondary"
          style={{
            fontFamily: 'Teko',
            fontWeight: 'normal',
          }}
        >
          Everything you need to...
        </Header>
        <Header
          as="h1"
          className="banner_text_primary"
          style={{
            fontFamily: 'Teko',
            fontWeight: 'normal',
            marginBottom: '1em',
          }}
        >
          <span
            style={{whiteSpace: 'pre'}}
            ref={el => {
              this.el = el;
            }}
          />
        </Header>
        <Arrow
          activeClass="active"
          className="bounce"
          to="sec1"
          smooth={true}
          duration={800}
        />
        <Element name="sec1" className="element" />
      </Container>
    );
  }
}

export default Banner;
