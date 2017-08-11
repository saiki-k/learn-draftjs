// Import styles for the editor contents, and controls
import './index.css';

import React, {Component} from 'react';

import PageContainer from '../../PageContainer';
import EditorAndConsoleContainer from '../../EditorAndConsoleContainer';
import Editor from './Editor';

import MarkdownFileRenderer from '../../MarkdownFileRenderer';
import readmeFile from './README.md';

export default class RichEditorExampleTut extends Component {
	render() {
		return (
			<PageContainer {...this.props}>
				<EditorAndConsoleContainer editorTitle={"Rich Text Editor"}>
					<Editor />
				</EditorAndConsoleContainer>
				<MarkdownFileRenderer mdFileURL={readmeFile}/>
			</PageContainer>
		);
	}
}
