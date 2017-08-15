import React, { Component } from 'react';

export default class ControlledTextarea extends Component {
	constructor(props) {
		super(props)
		this.state = { content: '' }
	}

	onChange = () => this.setState(
		{ content: this.textarea.value },
		() => this.props.consoleLog(`Content: ${this.state.content}`)
	);

	render() {
		return (
			<textarea
				style={{ resize: "vertical", height: "240px" }}
				className="form-control"
				ref={c => { this.textarea = c; }}
				value={this.state.content}
				onChange={this.onChange}
			>
			</textarea>
		);
	}
}
