import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

import ConsoleButtons from '../../ConsoleButtons';

export default class DraftTutsEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };
		this.onChange = (editorState) => this.setState({ editorState });
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
							onClick: () => this.props.consoleLog(
								JSON.stringify(this.state.editorState.toJS(), null, 4)
							),
							text: "Log EditorState",
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
