import React, {Component} from 'react';

import PageContainer from '../PageContainer';
import EditorAndConsoleContainer from '../EditorAndConsoleContainer';

import ControlledTextarea from './ControlledTextarea';
import TightlyControlledTextarea from './TightlyControlledTextarea';

import MarkdownFileRenderer from '../MarkdownFileRenderer';
import readmeFile from './README.md';

export default class ControlledTextAreaTut extends Component {
	render() {
		return (
			<PageContainer {...this.props}>
				<EditorAndConsoleContainer editorTitle="Controlled Textarea">
					<ControlledTextarea/>
				</EditorAndConsoleContainer>
				<MarkdownFileRenderer mdFileURL={readmeFile}/>
				<EditorAndConsoleContainer editorTitle="Tightly Controlled Textarea">
					<TightlyControlledTextarea/>
				</EditorAndConsoleContainer>
			</PageContainer>
		);
	}
}
