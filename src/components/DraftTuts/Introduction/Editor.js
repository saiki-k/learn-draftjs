import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

// Import DraftJS' deafult styles
import 'draft-js/dist/Draft.css';

export default class DraftTutsEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };
		this.onChange = (editorState) => {
			this.props.consoleLog(
				editorState.getCurrentContent().getPlainText()
			);
			this.setState({ editorState });
		}
	}
	render() {
		return (
			<Editor
				editorState={this.state.editorState}
				onChange={this.onChange}
				placeholder="Write something..."
			/>
		);
	}
}