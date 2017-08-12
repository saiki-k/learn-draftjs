import React, {Component} from 'react';

import PageContainer from '../../PageContainer';
import EditorAndConsoleContainer from '../../EditorAndConsoleContainer';
import Editor from './Editor';

import MarkdownFileRenderer from '../../MarkdownFileRenderer';
import readmeFile from './README.md';

export default class SelectionStateTut extends Component {
	render() {
		return (
			<PageContainer {...this.props}>
				<EditorAndConsoleContainer>
					<Editor/>
				</EditorAndConsoleContainer>
				<MarkdownFileRenderer mdFileURL={readmeFile}/>
			</PageContainer>
		);
	}
}
