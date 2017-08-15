```jsx
<Editor
  editorState={this.state.editorState}
  onChange={this.onChange}

  onTab={this.onTab}
  handleBeforeInput={this.handleBeforeInput}
  blockStyleFn={this.blockStyleFn}
  blockRenderMap={extendedBlockRenderMap}
  blockRendererFn={this.blockRendererFn}
  customStyleMap={customStyleMap}
  handleKeyCommand={this.handleKeyCommand}
  keyBindingFn={this.keyBindingFn}
  handleReturn={this.handleReturn}
  handlePastedText={this.handlePastedText}
  placeholder={this.props.placeholder}
  readOnly={this.props.disabled}
  spellCheck
/>
```

---

Apart from offering the data model and the API to make corresponding modifications; DraftJS also ships with the above Utils to help you in rendering the contents in your Editor to your desire!

### [draftjs.org/docs](https://draftjs.org/docs)

There is much more to DraftJS than what is covered here. You can find the rest of what you want to know though DraftJS' official docs.

###  [github.com/fatman-/learn-draftjs](https://github.com/fatman-/learn-draftjs)

You're also more than welcome to send pull requests — thanks a lot if you're inclined to do so — to better this resource! :)
