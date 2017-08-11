import React, { Component } from 'react';

export default class EditorAndConsoleContainer extends Component {
	constructor(props) {
		super(props);
		this.initialMessage = this.props.message || '';
		this.state = { consoleLog: this.initialMessage };
	}

	consoleLog = (consoleLog) => this.setState(
		{ consoleLog: this.initialMessage + consoleLog }
	);
	clearConsole = () => this.consoleLog(this.initialMessage);

	render() {
		const editorContainer = (editor) => (
			<div className="col-lg-6">
				<div className="panel panel-primary editor-wrapper">
					<div className="panel-heading">
						<h2 className="panel-title">{this.props.editorTitle || 'Editor'}</h2>
					</div>
					<div className="panel-body">
						{editor}
					</div>
				</div>
			</div>
		);

		const consoleContainer = (consoleLog) => (
			<div className="col-lg-6">
				<div className="panel panel-primary console-wrapper">
					<div className="panel-heading">
						<h2 className="panel-title">Console</h2>
					</div>
					<pre className="console-pre">
						<code>
							{consoleLog}
						</code>
					</pre>
				</div>
			</div>
		);

		return (
			<div className="row">
				{editorContainer(
					React.cloneElement(
						this.props.children,
						{
							consoleLog: this.consoleLog,
							clearConsole: this.clearConsole
						}
					)
				)}
				{consoleContainer(this.state.consoleLog)}
			</div>
		);
	}
}
