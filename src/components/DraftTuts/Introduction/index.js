import React, { Component } from 'react';
import PageContainer from '../../PageContainer';
import Editor from './editor';

export default class IntroductionTut extends Component {
	render() {
		const consoleGreeting = "" +
			"Hello there! :-)\n\n" +
			"This is an interactive resource for learning DraftJS!\n" +
			"Check the Explanation section below, to know more!";
		return (
			<PageContainer>
				<div className="row">
					<div className="col-lg-12">
						<h1>{this.props.match.url}</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<div className="panel panel-primary editor-wrapper">
							<div className="panel-heading">
								<h3 className="panel-title">Editor</h3>
							</div>
							<div className="panel-body">
								<Editor />
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="panel panel-primary console-wrapper">
							<div className="panel-heading">
								<h3 className="panel-title">Console</h3>
							</div>
							<pre className="console-pre">
								<code>
									{consoleGreeting}
								</code>
							</pre>
						</div>

					</div>
				</div>

				<div className="row">
					<div className="col-lg-12">
						<h2>Code</h2>
						<pre>
							<code>
								{
`import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

export default class DraftTutsEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };
		this.onChange = (editorState) => this.setState({ editorState });
	}
	render() {
		return (
			<Editor
				editorState={this.state.editorState}
				onChange={this.onChange}
			/>
		);
	}
}`
								}
							</code>
						</pre>
						<h2>Explanation</h2>
						<p>Hello, world</p>
						<p>This is the starter template!</p>
						<p>Let's create some kick-ass <code>draft-js</code> tutorials.</p>
					</div>
				</div>
			</PageContainer>
		);
	}
}
