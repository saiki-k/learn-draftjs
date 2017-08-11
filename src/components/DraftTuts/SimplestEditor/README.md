---

## Explanation

To have the simplest form of a DraftJS instance, up and running; we need to import two things from the `draft-js` library — `Editor`, and `EditorState`

```jsx
import { Editor, EditorState } from 'draft-js';
```

### `EditorState`

`EditorState` is the top-level object, for representing an editor's state! Duh! It is an immutable object (a [Record](https://facebook.github.io/immutable-js/docs/#/Record), specifically) which contains all the data to represent the state of an editor at any point in time; this includes:

- the state of the content in the editor
- the state of the selection in the editor — whether it is focused, collapsed/non-collapsed, and the position of the cursor
- decorations, which map pattern finder functions (strategies) to corresponding decorator components (imagine a hashtag `#draftjsisawesome` — that is a pattern (a word followed by a #), and we could specify a decoration for such patterns)
- the undo/redo stacks

`EditorState` object has a static method called `createEmpty`, which returns an empty editor state — an immutable object which can carry all the above information. Think of it as a data store initializer for a DraftJS editor.

```jsx
this.state = { editorState: EditorState.createEmpty() };
```

### `Editor`

We declare `Editor` as a controlled input component. It means that the source of truth about the `Editor`'s contents, is completely controlled by handling it as state in `Editor`'s parent component.

To facilitate this, `Editor` accepts an `onChange` event handler as a prop, which is fired on any and all of the changes that happen in the editor. The corresponding, new `editorState` is passed on to it as an argument.

```jsx
this.onChange = (editorState) => this.setState({ editorState });
```

The `Editor` React component is DraftJS' abstraction over `contenteditable`. It takes care of rendering a standard `contenteditable` markup across different browsers; when given a corresponding `editorState`.

```jsx
<Editor
  editorState={this.state.editorState}
  onChange={this.onChange}
/>
```



### Code

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
