import React, {Component} from 'react';

import PageContainer from '../../PageContainer';
import EditorAndConsoleContainer from '../../EditorAndConsoleContainer';
import Editor from './editor';

import MarkdownFileRenderer from '../../MarkdownFileRenderer';
import readmeFile from './README.md';

export default class IntroductionTut extends Component {
	render() {
		const message = "" +
			"Hello there! :-)\n\n" +
			"This is an interactive resource for learning DraftJS!\n" +
			"Check the Explanation section below, to know more!\n\n";
		return (
			<PageContainer {...this.props}>
				<EditorAndConsoleContainer message={message}>
					<Editor/>
				</EditorAndConsoleContainer>
				<MarkdownFileRenderer mdFileURL={readmeFile}/>
			</PageContainer>
		);
	}
}
