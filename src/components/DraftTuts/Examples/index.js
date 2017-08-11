import React, {Component} from 'react';

import PageContainer from '../../PageContainer';
import EditorAndConsoleContainer from '../../EditorAndConsoleContainer';
import RichEditor from './RichEditor';
import MediaEditor from './MediaEditor';

import MarkdownFileRenderer from '../../MarkdownFileRenderer';
import readmeFile from './README.md';
import richTextEditorCodeFile from './RichEditor/code.md';
import mediaEditorCodeFile from './MediaEditor/code.md';

export default class ExamplesTut extends Component {
	render() {
		return (
			<PageContainer {...this.props}>
				<MarkdownFileRenderer mdFileURL={readmeFile}/>
				<EditorAndConsoleContainer editorTitle={"Rich Text Editor"}>
					<RichEditor/>
				</EditorAndConsoleContainer>
				<MarkdownFileRenderer mdFileURL={richTextEditorCodeFile}/>
				<EditorAndConsoleContainer editorTitle={"Media Editor"}>
					<MediaEditor/>
				</EditorAndConsoleContainer>
				<MarkdownFileRenderer mdFileURL={mediaEditorCodeFile}/>
			</PageContainer>
		);
	}
}
