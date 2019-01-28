/** @format */

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

// Styles
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const {sidebarOpened} = this.state;

    if (sidebarOpened) this.setState({sidebarOpened: false});
  };

  handleToggle = () =>
    this.setState({sidebarOpened: !this.state.sidebarOpened});

  render() {
    const {children} = this.props;
    const {sidebarOpened} = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as={NavLink} to="/" exact>
              Home
            </Menu.Item>
            <Menu.Item as={NavLink} to="/products">
              Products
            </Menu.Item>
            {/*}
            <Menu.Item as={NavLink} to="/learn">
              Learn
            </Menu.Item>
            */}
            <Menu.Item as={NavLink} to="/about">
              About Us
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{minHeight: '100vh'}}
          >
            <Segment textAlign="center" style={{padding: '1em 0em'}} vertical>
              <Container>
                <Menu pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
              {/* <Banner mobile /> */}
              {children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

export default MobileContainer;
