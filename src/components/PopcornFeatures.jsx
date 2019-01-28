/** @format */

import React, {Component} from 'react';
import {Message, Grid} from 'semantic-ui-react';

class PopcornFeatures extends Component {
  render() {
    return (
      <Grid stackable centered padded>
        <Grid.Row>
          <Grid.Column>
            <Message size="huge">
              <Message.List>
                <Message.Item>
                Pin-to-Pin Compatible to C.H.I.P Computer
                </Message.Item>
                <Message.Item>1 GHz Allwinner R8 CPU w/ 512MB RAM</Message.Item>
                <Message.Item>Reliable 32GB eMMC Onboard Memory Storage</Message.Item>
                <Message.Item>
                  Two USB-C Connectors with Power Delivery to Ensure You
                  Have the Power You Need!
                </Message.Item>
                <Message.Item>Analog Audio Over USB-C for USB Headsets</Message.Item>
                <Message.Item>
                  Physical Button to Enable the Bootloader for Flashing (Paper
                  Clip Not Required!)
                </Message.Item>
                <Message.Item>
                  Built-in USB Serial Converter for Quick Debugging
                </Message.Item>
                <Message.Item>
                  802.11 b/g/n 2.4GHz WiFi with Bluetooth 4.0
                </Message.Item>
              </Message.List>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PopcornFeatures;
