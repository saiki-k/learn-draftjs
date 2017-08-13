---

## Explanation

`SelectionState` represents the state of the selection in the editor
- the offsets at which it starts and ends
- the keys of the blocks at which it starts and ends
- the direction of the selection
- the state of focus

We're logging the SelectionState above using the following function
```jsx
this.logSelectionState = () => this.props.consoleLog(
  JSON.stringify(this.state.editorState.getSelection().toJS(), null, 4)
);
```

As a side note, we could also use the API exposed by Draft to get individual pieces of info about the current SelectionState. For example, if you want to get the `anchorOffset`, you could write:
```jsx
const selectionState = this.state.editorState.getSelection();
const anchorOffset = selectionState.getAnchorOffset();
```

You could also set a selection state in your editor, as per your requirements

```jsx
this.setSelectionState = () => {
  const selectionState = this.state.editorState.getSelection();
  const {
    anchorOffset,
    focusOffset,
    anchorKey,
    focusKey
  } = this.state.selectionStateInputs;
  const newSelectionState = selectionState.merge({
    anchorOffset,
    focusOffset,
    anchorKey,
    focusKey
  });
  const newEditorState = EditorState.forceSelection(
    this.state.editorState,
    newSelectionState
  );
  this.onChange(newEditorState);
};
```

### Code
Here is the complete code snippet for the above Editor component
```jsx
import React, { Component } from 'react';
import { Editor, EditorState, SelectionState } from 'draft-js';

import ConsoleButtons from '../../ConsoleButtons';
import SelectionStateInputs from './SelectionStateInputs';

export default class DraftTutsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      selectionStateInputs: {
        anchorOffset: '',
        focusOffset: '',
        anchorKey: '',
        focusKey: '',
      },
    };
    this.logSelectionState = () => this.props.consoleLog(
      JSON.stringify(this.state.editorState.getSelection().toJS(), null, 4)
    );
    this.setSelectionState = () => {
      const selectionState = this.state.editorState.getSelection();
      const {
        anchorOffset,
        focusOffset,
        anchorKey,
        focusKey
      } = this.state.selectionStateInputs;
      const newSelectionState = selectionState.merge({
        anchorOffset,
        focusOffset,
        anchorKey,
        focusKey
      });
      const newEditorState = EditorState.forceSelection(
        this.state.editorState,
        newSelectionState
      );
      this.onChange(newEditorState);
    };
    this.onChange = (editorState) => this.setState(
      { editorState },
      this.logSelectionState
    );
    this.setSelectionStateInputs = (selectionStateInputs) => this.setState({
      selectionStateInputs
    });
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
              onClick: this.logSelectionState,
              text: "Log SelectionState",
            },
            {
              onClick: this.props.clearConsole,
              text: "Clear Console",
            },
            {
              onClick: this.setSelectionState,
              text: "Set SelectionState (from inputs below)",
            }
          ]}
        />
        <SelectionStateInputs
          setSelectionStateInputs={this.setSelectionStateInputs}
          selectionStateInputs={this.state.selectionStateInputs}
        />
      </div>
    );
  }
}
```
