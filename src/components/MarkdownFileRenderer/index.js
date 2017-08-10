import React, {Component} from 'react';

import marked, { Renderer } from 'marked';
import hljs from 'highlight.js';

export default class MarkdownFileRenderer extends Component {
	constructor(props) {
		super(props);
		this.state = { __html: '' };
		const renderer = new Renderer();
		renderer.code = (code, lang) => {
			const validLang = !!(lang && hljs.getLanguage(lang));
			const highlightedCode = validLang
				? hljs.highlight(lang, code).value
				: code;
				return (
					'<div class="panel panel-primary code-wrapper">' +
						'<div class="panel-heading">' +
							'<h2 class="panel-title">Code</h2>' +
						'</div>' +
						'<pre class=hljs-pre>' +
						`<code class="hljs ${lang}">` +
							`${highlightedCode}` +
						'</code>' +
						'</pre>' +
					'</div>'
				);
		};
		marked.setOptions({ renderer });
	}

	componentDidMount() {
		this.fetchFile();
	}

	async fetchFile() {
		const response = await fetch(this.props.mdFileURL);
		const markdown = await response.text();
		this.setState({ __html: marked(markdown) });
	}

	render() {
		return (
			<div className="row">
				<div
					className="col-lg-12"
					dangerouslySetInnerHTML={this.state}
				/>
			</div>
		);
	}
}
