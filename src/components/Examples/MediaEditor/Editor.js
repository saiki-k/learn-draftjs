import React, { Component } from 'react';
import {
	AtomicBlockUtils,
	Editor,
	EditorState,
	RichUtils,
	convertToRaw
} from 'draft-js';

import ConsoleButtons from '../../ConsoleButtons';

import imageFile from './media.png';
import audioFile from './media.mp3';
import videoFile from './media.mp4';

export default class MediaEditorExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
			showURLInput: false,
			url: '',
			urlType: ''
		};
		this.focus = () => this.refs.editor.focus();
		this.logContentState = () => {
			const contentState = this.state.editorState.getCurrentContent();
			this.props.consoleLog(JSON.stringify(contentState.toJS(), null, 4));
		};
		this.logRawContentState = () => {
			const contentState = this.state.editorState.getCurrentContent();
			this.props.consoleLog(JSON.stringify(convertToRaw(contentState), null, 4));
		};
		this.onChange = (editorState) => this.setState({ editorState });
		this.onURLChange = (e) => this.setState({ urlValue: e.target.value });
		this.addAudio = this._addAudio.bind(this);
		this.addImage = this._addImage.bind(this);
		this.addVideo = this._addVideo.bind(this);
		this.confirmMedia = this._confirmMedia.bind(this);
		this.handleKeyCommand = this._handleKeyCommand.bind(this);
		this.onURLInputKeyDown = this._onURLInputKeyDown.bind(this);
	}

	_handleKeyCommand(command) {
		const {editorState} = this.state;
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			this.onChange(newState);
			return true;
		}
		return false;
	}

	_confirmMedia(e) {
		e.preventDefault();
		const {editorState, urlValue, urlType} = this.state;
		const contentState = editorState.getCurrentContent();
		const contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', { src: urlValue });
		const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
		const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
		this.setState({
			editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '),
			showURLInput: false,
			urlValue: ''
		}, () => {
			setTimeout(() => this.focus(), 0);
		});
	}

	_onURLInputKeyDown(e) {
		if (e.which === 13) {
			this._confirmMedia(e);
		}
	}

	_promptForMedia(type) {
		this.setState({
			showURLInput: true,
			urlValue: '',
			urlType: type
		}, () => {
			setTimeout(() => this.refs.url.focus(), 0);
		});
	}

	_addAudio() {
		this._promptForMedia('audio');
	}

	_addImage() {
		this._promptForMedia('image');
	}

	_addVideo() {
		this._promptForMedia('video');
	}

	render() {
		let urlInput;
		if (this.state.showURLInput) {
			urlInput = <div style={styles.urlInputContainer}>
				<input
					onChange={this.onURLChange}
					ref="url" style={styles.urlInput}
					type="text"
					value={this.state.urlValue}
					onKeyDown={this.onURLInputKeyDown}
				/>
				<button className="btn btn-default" onMouseDown={this.confirmMedia}>
					Confirm
				</button>
			</div>;
		}
		return (
			<div style={styles.root}>
				<div style={{
					marginBottom: 10
				}}>
					Use the buttons to add audio, image, or video.
				</div>
				<div style={{
					marginBottom: 10
				}}>
					Here are some examples that can be entered as a URL:
					<ul>
						<li>{imageFile}</li>
						<li>{audioFile}</li>
						<li>{videoFile}</li>
					</ul>
				</div>
				<div style={styles.buttons}>
					<button
						onMouseDown={this.addImage}
						className="btn btn-default"
						style={{ marginRight: 10 }}
					>
						Add Image
					</button>
					<button
						onMouseDown={this.addAudio}
						className="btn btn-default"
						style={{ marginRight: 10 }}
					>
						Add Audio
					</button>
					<button
						onMouseDown={this.addVideo}
						className="btn btn-default"
						style={{ marginRight: 10 }}
					>
						Add Video
					</button>
				</div>
				{urlInput}
				<div style={styles.editor} onClick={this.focus}>
					<Editor
						blockRendererFn={mediaBlockRenderer}
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
						placeholder="Enter some text..."
						ref="editor"
					/>
				</div>
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

function mediaBlockRenderer(block) {
	if (block.getType() === 'atomic') {
		return { component: Media, editable: false };
	}
	return null;
}

const Audio = (props) => {
	return <audio controls src={props.src} style={styles.media}/>;
};

const Image = (props) => {
	return <img src={props.src} style={styles.media} alt="Example"/>;
};

const Video = (props) => {
	return <video controls src={props.src} style={styles.media}/>;
};

const Media = (props) => {
	const entity = props.contentState.getEntity(props.block.getEntityAt(0));
	const {src} = entity.getData();
	const type = entity.getType();
	let media;
	if (type === 'audio') {
		media = <Audio src={src}/>;
	} else if (type === 'image') {
		media = <Image src={src}/>;
	} else if (type === 'video') {
		media = <Video src={src}/>;
	}
	return media;
};

const styles = {
	buttons: {
		marginBottom: 10
	},
	urlInputContainer: {
		marginBottom: 10
	},
	urlInput: {
		marginRight: 10,
		padding: 3
	},
	editor: {
		border: '1px solid #ddd',
		cursor: 'text',
		padding: '15px'
	},
	button: {
		marginTop: 10,
		textAlign: 'center'
	},
	media: {
		width: '100%'
	}
};
