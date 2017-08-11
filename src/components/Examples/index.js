import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import PageContainer from '../PageContainer';
import EditorAndConsoleContainer from '../EditorAndConsoleContainer';

export default class ExamplesTut extends Component {
	render() {
		return (
			<PageContainer {...this.props}>
				<p>Below are a few official DraftJS editor examples from the DraftJS team</p>
				<ul>
					<li>
						<Link to={'/rich-editor-example'}>
							Rich Text Editor
						</Link>
					</li>
					<li>
						<Link to={'/media-editor-example'}>
							Media Editor
						</Link>
					</li>
				</ul>
			</PageContainer>
		);
	}
}
