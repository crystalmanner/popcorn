/** @format */

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import fetch from 'isomorphic-unfetch';

import config from './config';
import './Checkout.css';
import img from './../../assets/popcorn_pc.png';

export default class TakeMoney extends React.Component {
  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }
  onToken(token) {
    fetch(config.stripe.apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        token,
        charge: {
          amount: this.props.amount * 9900,
          currency: config.stripe.currency,
        },
      }),
    })
      .then(res => {
        res.json();
        console.log('Success');
      })
      .catch(err => {
        console.log('Rejected');
      });
  }

  render() {
    return (
      <StripeCheckout
        name="Source Parts Inc."
        image={img}
        token={this.onToken}
        amount={this.props.amount * 9900}
        currency={config.stripe.currency}
        shippingAddress
        stripeKey={config.stripe.apiKey}
        allowRememberMe={false}
      >
        <input styleName="button" type="button" value="Pre-Order Now !" />
      </StripeCheckout>
    );
  }
}
