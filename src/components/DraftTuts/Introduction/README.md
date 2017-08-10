```jsx
import React, { Component } from 'react';
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
}
```

---

## Explanation

Hello, world!

This is the starter template!

Let's create some kick-ass `draft-js` tutorials.
