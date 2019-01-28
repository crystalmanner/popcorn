/** @format */

import React from 'react';

import './Features.css';
// import TakeMoney from './checkout';

const Features = () => (
	<div>
		<div styleName="main">
			<div styleName="features">
				<h3>FEATURES</h3>
				<div styleName="lista_wrap">
					<ul styleName="lista">
						<li styleName="list_item">Pin-to-Pin C.H.I.P compatible Headers</li>
						<li styleName="list_item">Allwinner R8 1 GHz CPU w/ 512MB RAM</li>
						<li styleName="list_item">Reliable 8GB eMMC Memory Storage</li>
						<li styleName="list_item">
							Two USB Type C Connectors with Power Delivery microcontrollers
							that ensure that power is there when you need it
						</li>
						<li styleName="list_item">Analog Audio Over USB Type C</li>
						<li styleName="list_item">
							A physical button to enable the bootloader for flashing (no more
							paper clips!)
						</li>
					</ul>
				</div>
			</div>
			<div styleName="asset">
				<div styleName="card">
					<div styleName="front">
						<h4>Learn more</h4>
						<i
							className="fas fa-angle-double-right bounce2"
							styleName="flip_icon"
						/>
						<div styleName="img" />
					</div>
					<div styleName="back">
						<p styleName="card-text">
							& stay in touch with our latest <br />
							<span styleName="red">Offers</span> and{' '}
							<span styleName="red">News</span>
						</p>
						<form
							styleName="form"
							action="https://parts.us18.list-manage.com/subscribe/post?u=c61574758cb378cc0454f956b&amp;id=f190d46402"
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							className="validate"
							target="_blank"
							noValidate
						>
							<input type="submit" value="Subscribe here" styleName="button" />
						</form>
						<span styleName="small_text">* we won't spam your email</span>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Features;
