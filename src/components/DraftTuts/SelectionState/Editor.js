import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

import ConsoleButtons from '../../ConsoleButtons';
import SelectionStateInputs from './SelectionStateInputs';

export default class DraftTutsEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
			selectionStateInputs: {
				anchorOffset: '',
				focusOffset: '',
				anchorKey: '',
				focusKey: '',
			},
		};
		this.logSelectionState = () => this.props.consoleLog(
			JSON.stringify(this.state.editorState.getSelection().toJS(), null, 4)
		);
		this.setSelectionState = () => {
			const selectionState = this.state.editorState.getSelection();
			const {
				anchorOffset,
				focusOffset,
				anchorKey,
				focusKey
			} = this.state.selectionStateInputs;
			const newSelectionState = selectionState.merge({
				anchorOffset,
				focusOffset,
				anchorKey,
				focusKey
			});
			const newEditorState = EditorState.forceSelection(
				this.state.editorState,
				newSelectionState
			);
			this.onChange(newEditorState);
		};
		this.onChange = (editorState) => this.setState(
			{ editorState },
			this.logSelectionState
		);
		this.setSelectionStateInputs = (selectionStateInputs) => this.setState({
			selectionStateInputs
		});
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
						{
							onClick: this.setSelectionState,
							text: "Set SelectionState (from inputs below)",
						}
					]}
				/>
				<SelectionStateInputs
					setSelectionStateInputs={this.setSelectionStateInputs}
					selectionStateInputs={this.state.selectionStateInputs}
				/>
			</div>
		);
	}
}
