---
## Explanation
`ContentState` is the meat of the editor. This stores all information about the content inside the editor. It contains an [OrderedMap](https://facebook.github.io/immutable-js/docs/#/OrderedMap) representing all `ContentBlock`s inside the editor.

A `ContentBlock` is akin to a paragraph. The content in the editor is a list of these `ContentBlock`s.

Each `ContentBlock` is an ImmutableJS [Record](https://facebook.github.io/immutable-js/docs/#/Record), which maintains all the information about the block, which includes:
- `key`: This is a string, for uniquely identifying the present block, among a list of blocks (more specifically, an `OrderedMap` of `ContentBlock`s).
- `type`: The type usually indicates how this block is rendered. For instance blocks with `unstyled` type render as `<p>` tags; and blocks with `header-one` type render as `<h1>` tags.
- `text`: The entire text in the block
- `characterList`: This is an ImmutableJS [List](https://facebook.github.io/immutable-js/docs/#/Record), with as many number of elements as the number of characters in the `text` string. This is used for maintaining data on what `style`, and what `entity` a particular character in the present `ContentBlock` has. (More on `entities`, and `entityMap` later!)

The `ContentState` object also maintains the following `SelectionState` data:
- `selectionBefore` which indicates the selection state of the editor before the current content is to be rendered in the editor; and..
- `selectionAfter` which indicates the selection state of the editor after the current content is rendered in the editor.

### Data Conversion

While you can get the current content in the editor with `this.state.editorState.getCurrentContent()`, its form is not suitable for data storage. So DraftJS ships with a utility function called `convertToRaw` which converts the content state to a form more suitable for data storage and retrieval.

```jsx
import { convertToRaw } from 'draft-js';

const contentState = this.state.editorState.getCurrentContent();
const rawContentState = convertToRaw(contentState);
```

DraftJS also has `convertFromRaw` util function which you can use to initialise an editor state, with an existing raw content state object, like so:

```jsx
this.state = { editorState: EditorState.createWithContent(convertFromRaw(rawContentState))}
```

As an aside, you can also create DraftJS `ContentState` objects with `HTML`, `Plain Text`; and use `EditorState#createContent` to initialize your editor content accordingly!


### Code
```jsx
import React, { Component } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';

import ConsoleButtons from '../../ConsoleButtons';

export default class DraftTutsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.logContentState = () => this.props.consoleLog(
      JSON.stringify(this.state.editorState.getCurrentContent().toJS(), null, 4)
    );
    this.logRawContentState = () => this.props.consoleLog(
      JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()), null, 4)
    );
    this.onChange = (editorState) => this.setState(
      { editorState },
      this.logContentState
    );
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
```
