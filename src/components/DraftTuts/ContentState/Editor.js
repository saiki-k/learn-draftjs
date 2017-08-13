import React, { Component } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';

import ConsoleButtons from '../../ConsoleButtons';

export default class DraftTutsEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };
		this.logContentState = () => this.props.consoleLog(
			JSON.stringify(this.state.editorState.getCurrentContent().toJS(), null, 4)
		);
		this.logRawContentState = () => this.props.consoleLog(
			JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()), null, 4)
		);
		this.onChange = (editorState) => this.setState(
			{ editorState },
			this.logContentState
		);
	}
	render() {
		return (
			<div>
				<Editor
					editorState={this.state.editorState}
					onChange={this.onChange}
				/>
				<ConsoleButtons
					buttons={[
						{
							onClick: this.logContentState,
							text: "Log ContentState",
						},
						{
							onClick: this.logRawContentState,
							text: "Log Raw ContentState",
						},
						{
							onClick: this.props.clearConsole,
							text: "Clear Console",
						},
					]}
				/>
			</div>
		);
	}
}
