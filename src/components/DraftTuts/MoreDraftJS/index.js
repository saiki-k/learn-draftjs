import React, { Component } from 'react';
import PageContainer from '../../PageContainer';

export default class MoreDraftJSTut extends Component {
	render() {
		return (
			<PageContainer {...this.props}>
				<p>Hello, world</p>
				<p>This is the starter template!</p>
				<p>Let's create some kick-ass <code>draft-js</code> tutorials.</p>
			</PageContainer>
		);
	}
}
