/** @format */

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

// Styles
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Header,
} from 'semantic-ui-react';
import Logo from '../../assets/source_parts_logo.jpg';

const PopcornComputerText = () => (
  <Header
    // size="large"
    as="h1"
    style={{
      fontFamily: 'Teko',
      fontWeight: 'medium',
    }}
  >
    Popcorn Computer
  </Header>
);

class DesktopContainer extends Component {
  state = {};

  // handleItemClick = (e, {name}) => this.setState({activeItem: name});

  hideFixedMenu = () => this.setState({fixed: false});

  showFixedMenu = () => this.setState({fixed: true});

  render() {
    const {children} = this.props;
    const {fixed} = this.state;
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment textAlign="center" style={{padding: '0em'}} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={false}
              pointing={true}
              secondary={true}
              size="huge"
              borderless={false}
              style={{backgroundColor: '#fff'}}
            >
              <Container>
                <Menu.Item name="logo" style={{padding: 0}}>
                  <img src={Logo} alt="srcLogo" />
                </Menu.Item>
                <Menu.Item style={{padding: '0.25em', marginLeft: '0.25em'}}>
                  <PopcornComputerText />
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item name="home" as={NavLink} exact to="/" />
                  <Menu.Item name="products" as={NavLink} to="/products" />
                  { /*
                  <Menu.Item name="learn" as={NavLink} to="/learn" />
                  */ }
                  <Menu.Item name="about us" as={NavLink} to="/about" />
                </Menu.Menu>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
