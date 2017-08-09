import React, { Component } from 'react';
import PageContent from '../../PageContent';

export default class InlineStylesTut extends Component {
	render() {
		return (
			<PageContent {...this.props}>
				<p>Hello, world</p>
				<p>This is the starter template!</p>
				<p>Let's create some kick-ass <code>draft-js</code> tutorials.</p>
			</PageContent>
		);
	}
}
