import React, { Component } from 'react';
import StateInputs from './StateInputs.js';

export default class TightlyControlledTextarea extends Component {
	constructor(props) {
		super(props)
		this.state = {
			content: '',
			selection: { startOffset: 0, endOffset: 0 }
		};
		this.selectionUpdateEvents = [
			'select',
			'click',
			'focus',
			'keyup'
		];
	}

	selectionUpdateListener = () => this.setState(
		{ selection: this.getSelection(this.textarea) },
		this.logTextareaState
	);

	logTextareaState = () => this.props.consoleLog(
		`Content: ${this.state.content}\n\n` +
		`Selection: ${JSON.stringify(this.state.selection, null, 2)}`
	);

	getSelection = (textareaRef) => ({
		startOffset: textareaRef.selectionStart,
		endOffset: textareaRef.selectionEnd,
	});

	setSelectionToDOM = (textareaRef, selection) => {
		textareaRef.selectionStart = selection.startOffset;
		textareaRef.selectionEnd = selection.endOffset;
	}

	componentDidMount() {
		const addEventListeners = () => this.selectionUpdateEvents.forEach(
			eventType => this.textarea.addEventListener(
				eventType,
				this.selectionUpdateListener
			)
		);
		addEventListeners();
	}

	componentWillUnmount() {
		const removeEventListeners = () => this.selectionUpdateEvents.forEach(
			eventType => this.textarea.removeEventListener(
				eventType,
				this.selectionUpdateListener
			)
		);
		removeEventListeners();
	}

	onChange = () => this.updateTextarea({
		content: this.textarea.value,
		selection: this.getSelection(this.textarea)
	});


	updateTextarea = ({ content, selection }) => {
		const updatedContent = content || this.textarea.value
		const updatedSelection = selection || this.getSelection(this.textarea);
		this.setState(
			{ content: updatedContent, selection: updatedSelection },
			() => {
				this.setSelectionToDOM(this.textarea, updatedSelection)
				this.logTextareaState()
			}
		);
	}

	render() {
		return (
			<div>
				<textarea
					style={{ resize: "vertical", height: "240px" }}
					className="form-control"
					ref={c => { this.textarea = c; }}
					value={this.state.content}
					onChange={this.onChange}
				>
				</textarea>
				<StateInputs
					setStateInputs={(stateInputs) => {
						this.updateTextarea(stateInputs);
						this.textarea.focus();
					}}
				/>
			</div>
		);
	}
}
