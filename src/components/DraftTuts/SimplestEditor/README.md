---

## Explanation

To have the simplest form of a DraftJS instance, up and running; we need to import two things from the `draft-js` library — `Editor`, and `EditorState`

```jsx
import { Editor, EditorState } from 'draft-js';
```

### `EditorState` — Top-level object for representing an editor's state

...

### `Editor` — Controlled ContentEditable Component

The `Editor` React component is DraftJS' abstraction over `contenteditable`. It takes care of rendering a standard `contenteditable` markup across different browsers; when given a corresponding `editorState`.

```jsx
<Editor
  editorState={this.state.editorState}
  onChange={this.onChange}
/>
```

We declare `Editor` as a controlled component. Basically, it means that the source of truth of the `Editor`'s contents (contents inside the `contentediable`), reside as state in `Editor`'s parent component. To facilitate this, `Editor` accepts an `onChange` event handler as a prop, which accepts a new `editorState`, whenever a change happens.

```jsx
this.onChange = (editorState) => this.setState({ editorState });
```

### Complete Code

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
