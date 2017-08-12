import React, {Component} from 'react';

import PageContainer from '../../PageContainer';
import EditorAndConsoleContainer from '../../EditorAndConsoleContainer';
import Editor from './Editor';

import MarkdownFileRenderer from '../../MarkdownFileRenderer';
import readmeFile from './README.md';

export default class DecoratorsTut extends Component {
	render() {
		return (
			<PageContainer {...this.props}>
				<EditorAndConsoleContainer editorTitle="Tweet Editor Example">
					<Editor/>
				</EditorAndConsoleContainer>
				<MarkdownFileRenderer mdFileURL={readmeFile}/>
			</PageContainer>
		);
	}
}
