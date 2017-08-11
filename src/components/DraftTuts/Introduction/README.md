---

## Explanation

DraftJS is a rich-text editor framework written in React, developed at Facebook! Before we dive into serious DraftJS stuff, I would like to give you a **quick introduction** to this [**resource**](https://github.com/fatman-/learn-draftjs)!

### What is this?

This is an interactive DraftJS learning resource, setup using `create-react-app`, `react-router-browser`, `marked`, `bootstrap`, and of course `draft-js`, and `immutable` npm packages; for the sole purpose of making the learning ride easy to DraftJS' newcomers.

If you already know React, and want to learn DraftJS, then you're probably at the right place!

### Editor

As you see at the top, there are two interactive panels. The one labeled **Editor** is an instance of the DraftJS editor! You could click inside, and start writing!

### Console

To its right (or bottom, based on your layout) the panel named **Console** is where all the `console.log` messages would go. If you have written something in the editor, you would have noticed that all the contents of the editor are being logged inside this panel!

The only difference — instead of using the actual `console.log` function — we use a special function `this.props.consoleLog`, which is made available to the corresponding Editor component.

In other words, we are just replacing our traditional `console.log` with `this.props.consoleLog` for the convenience of checking the console output on the screen, aside the **Editor**.

### Sidebar

To your left are the various DraftJS topics (you're at **Introduction**) that you can savor. It is recommended that you go through them linearly, especially if you're just beginning out with DraftJS.

<!--
### Code

Finally, below is the **complete code** snippet which makes up the above Editor component. We will revisit all the parts in the following snippet step by step.

```jsx
import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

// Import DraftJS' deafult styles
import 'draft-js/dist/Draft.css';

export default class DraftTutsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => {
      this.props.consoleLog(
        editorState.getCurrentContent().getPlainText()
      );
      this.setState({ editorState });
    }
  }
  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        placeholder="Write something..."
      />
    );
  }
}
```
-->
