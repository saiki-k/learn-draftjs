import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

import ConsoleButtons from '../../ConsoleButtons';

export default class DataModelTutsEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };
		this.logSelectionState = () => this.props.consoleLog(
			JSON.stringify(this.state.editorState.getSelection().toJS(), null, 4)
		);
		this.onChange = (editorState) => this.setState(
			{ editorState },
			this.logSelectionState
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
							onClick: this.logSelectionState,
							text: "Log SelectionState",
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
