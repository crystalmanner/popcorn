/** @format */

import React, {Component} from 'react';

import './PreOrder.css';
import TakeMoney from './checkout';

class PreOrder extends Component {
	constructor(props) {
		super(props);

		this.state = {amount: 1, price: 99};
	}

	render() {
		return (
			<div>
				<div styleName="main">
					<div styleName="content">
						<h2 styleName="title">
							{' '}
							<span styleName="red" className="blink_me">
								Limited Edition
							</span>{' '}
							Developer Units ! <br />
							( Only for <span styleName="red">
								${this.state.price}
							</span> )<span styleName="small_text"> * Limited Quantity</span>
						</h2>
						<input
							styleName="price_input"
							type="number"
							min="1"
							onChange={e =>
								this.setState({
									amount: e.target.value,
									price: e.target.value * 99,
								})
							}
							value={this.state.amount}
						/>
						<TakeMoney amount={this.state.amount} />
						<p styleName="ps">
							* Estimated to begin shipping by the 4th of July
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default PreOrder;
