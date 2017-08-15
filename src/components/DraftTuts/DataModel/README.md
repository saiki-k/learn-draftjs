---
## Explanation

DraftJS stores all of its data in an ImmutableJS data structure called [Record](https://facebook.github.io/immutable-js/docs/#/Record). We call this, `EditorState`.

`EditorState`, as discussed in a previous section, stores all the information required to properly render an instance of the editor. This includes:

- `SelectionState`: This again is a [Record](https://facebook.github.io/immutable-js/docs/#/Record) which represents the current state of the selection in the editor — the position of the cursor; corresponding offsets; and if the selection has focus or not
- `ContentState`: This is also a [Record](https://facebook.github.io/immutable-js/docs/#/Record) represents the state of all the content in the editor including all the metadata; how it should be represented; the state of the selection before the current render, and when a change is applied the state of the selection after the render.
- `Decorators`: Decorators (specified by an ImmutableJS [Map](https://facebook.github.io/immutable-js/docs/#/Map)) dynamically search for the specified patterns, and decorate the said patterns with corresponding, specified components.
- `Entities`: This is also a [Map](https://facebook.github.io/immutable-js/docs/#/Map), which is contained within `ContentState`. Entities are always applied on a character, and are used to specify some metadata about the character.

![DraftJS' Data Model](/images/data-model.png)

### The **Immutable** Advantage

ImmutableJS data structures are persistent. **Persistence**, meaning, when you modify a data structure, the old one is left untouched, and a new copy — with the required modification applied — is generated, and returned.

![Immutable — Persistence](/images/immutable-persistence.png)

But this is not memory inefficient, because ImmutableJS data structures also have the ability of **Structural Sharing**; what this means is that when a change is applied to an immutable data structure; only the data that has a reference to the new change is copied; and the rest of the data is **shared** with the new copy. Also, the old data can be garbage collected, if it isn't needed anymore.

To depict it diagrammatically, imagine you would want to change the `f` node in the data structure below.

![Immutable — Data Structure](/images/immutable-data-structure.png)

As far as new copies go, only `d`, `g`, and `f` are replicated; because only they have a reference to this new change. The rest of the structure is left untouched. Therefore, the total footprint of the memory grows only in proportion to the total amount of data you create. In other words, this makes it very memory efficient.

![Immutable JS — Structural Sharing](/images/immutable-structural-sharing.png)

If you want to understand more about ImmutableJS' internals; I highly recommend this talk on the topic, given by its creator, Lee Byron — [React.js Conf 2015 - Immutable Data and React](https://www.youtube.com/watch?v=I7IdS-PbEgI)

### Code
```jsx
import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

import ConsoleButtons from '../../ConsoleButtons';

export default class DraftTutsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
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
              onClick: () => this.props.consoleLog(
                JSON.stringify(this.state.editorState.toJS(), null, 4)
              ),
              text: "Log EditorState",
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
