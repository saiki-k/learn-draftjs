We've already seen, and know about controlled textareas! As a refresher, the source of the truth for the state of the content is managed by the parent component of the `textarea`.

As such, the code looks something like below:

```jsx
...
constructor(props) {
  super(props)
  this.state = { content: '' }
}

onChange = () => this.setState(
  { content: this.textarea.value },
  () => this.props.consoleLog(`Content: ${this.state.content}`)
);

render() {
  return (
    <textarea
      ref={c => { this.textarea = c; }}
      value={this.state.content}
      onChange={this.onChange}
    >
    </textarea>
  );
}
...
```

Simple, right? But can we apply what we have learnt from DraftJS to the simple `textarea`?

### Step 1

**We should be able to represent the entire editor state in a data model**; which includes selection state.

This is simple, we will add an extra property to the state object.
```jsx
this.state = {
  content: '',
  selection: { startOffset: 0, endOffset: 0 }
};
```

### Step 2

**The data model should have a well defined set of edit operations.**

This is also easy, we just update the `state` whenever there's a new `{ content, selection }` object

```jsx
this.setState({ content, selection });
```

### Step 3
**The data model should have a one-on-one map to the DOM.**

This is a bit tricky, not tricky per se, but there's a bunch of code that needs to be written, to make this seamless.

The `content` part is easy; but we also have to substantiate the claim that our `state` as the source of truth for `selection` is actually a truth.

For achieving this, first we need to be absolutely every mouse click, every keystroke, all selection events, and all focus events account for the change in selection:

```jsx
constructor(props) {
  super(props);
  this.state = {
    content: '',
    selection: { startOffset: 0, endOffset: 0 }
  };
  this.selectionUpdateEvents = [
    'select',
    'click',
    'focus',
    'keyup'
  ];
}

selectionUpdateListener = () => this.setState(
  { selection: this.getSelection(this.textarea) },
  this.logTextareaState
);

componentDidMount() {
  const addEventListeners = () => this.selectionUpdateEvents.forEach(
    eventType => this.textarea.addEventListener(
      eventType,
      this.selectionUpdateListener
    )
  );
  addEventListeners();
}

componentWillUnmount() {
  const removeEventListeners = () => this.selectionUpdateEvents.forEach(
    eventType => this.textarea.removeEventListener(
      eventType,
      this.selectionUpdateListener
    )
  );
  removeEventListeners();
}
```

We will have a dedicated function which ensures `selection` state is also updated, along with the `content`, when changes are made to the editor. We will hook our original `onChange` function to also use `updateTextarea`

```jsx
updateTextarea = ({ content, selection }) => {
  const updatedContent = content || this.textarea.value;
  const updatedSelection = selection || this.getSelection(this.textarea);
  this.setState(
    { content: updatedContent, selection: updatedSelection },
    () => this.setSelectionToDOM(this.textarea, updatedSelection)
  );
}

onChange = () => this.updateTextarea({
  content: this.textarea.value,
  selection: this.getSelection(this.textarea)
});
```
`this.textarea` in the above piece of code is a `ref` to the corresponding `textarea` component instance!
```jsx
<textarea
  ref={c => { this.textarea = c; }}
  value={this.state.content}
  onChange={this.onChange}
/>
```

`getSelection` (from `textarea` in the DOM), and `setSelectionToDOM` are helper functions that ensure a sync between what our state reports, and what the actual DOM has to say about the `textarea`'s selection.

```jsx
getSelection = (textareaRef) => ({
  startOffset: textareaRef.selectionStart,
  endOffset: textareaRef.selectionEnd,
});

setSelectionToDOM = (textareaRef, selection) => {
  textareaRef.selectionStart = selection.startOffset;
  textareaRef.selectionEnd = selection.endOffset;
}
```

As you can see, if we don't pass either the `content`, or the `selection` to `updateTextarea`; the corresponding values are derived from the DOM.
```jsx
const updatedContent = content || this.textarea.value
const updatedSelection = selection || this.getSelection(this.textarea);
```

That's it! Lo and behold, we have a tightly controlled textarea!
