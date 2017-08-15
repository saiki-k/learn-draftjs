---
## Explanation

Entities are objects (ImmutableJS [Map](https://facebook.github.io/immutable-js/docs/#/Map)s) which are used for storing metadata on certain characters, as required, inside the editor.

I have hooked up the console to automatically receive the entity information at the current selection. Try to place your cursor near `Superman`, `Batman`, or `Green Lantern`!

### data

To give you an instance of a real world usage of entities — suppose, we want to add a link to a certain range of selected characters; the url would be stored as `data` inside the corresponding `entity`.

### mutability

If you have read the contents inside the editor, it pretty much explains about all the three types of possible `mutability` values for an entity. For the above real-world instance of a link entity, the `mutability` would be `MUTABLE`

### type

Coming to the `type` of the entity, it is just a plain string which helps in identifying the purpose of the entity. For the above real-world instance of a link entity, we could set the `type` to be simply equal to `LINK`.

The code I've used to get the entity information at a selection, is as follows:
```jsx
getEntityAtSelection = (editorState) => {
  const selectionState = editorState.getSelection();
  const selectionKey = selectionState.getStartKey();
  const contentstate = editorState.getCurrentContent();

  // The block in which the selection starts
  const block = contentstate.getBlockForKey(selectionKey);

  // Entity key at the start selection
  const entityKey = block.getEntityAt(selectionState.getStartOffset());
  if (entityKey) {
    // The actual entity instance
    const entityInstance = contentstate.getEntity(entityKey);
    const entityInfo = {
      type: entityInstance.getType(),
      mutability: entityInstance.getMutability(),
      data: entityInstance.getData(),
    }
    this.props.consoleLog(JSON.stringify(entityInfo, null, 4));
  } else {
    this.props.consoleLog("No entity present at current selection!");
  }
}
```

As you can see, you can also use the inputs under `New Entity Inputs` to set an entity on a particular selection. The code that is being used for setting an entity is as follows:
```jsx
setEntityAtSelection = ({ type, mutability, data }) => {
  const editorState = this.state.editorState;
  const contentstate = editorState.getCurrentContent();

  // Returns ContentState record updated to include the newly created DraftEntity record in it's EntityMap.
  let newContentState = contentstate.createEntity(type, mutability, { url: data });

  // Call getLastCreatedEntityKey to get the key of the newly created DraftEntity record.
  const entityKey = contentstate.getLastCreatedEntityKey();

  // Get the current selection
  const selectionState = this.state.editorState.getSelection();

  // Add the created entity to the current selection, for a new contentState
  newContentState = Modifier.applyEntity(
    newContentState,
    selectionState,
    entityKey
  );

  // Add newContentState to the existing editorState, for a new editorState
  const newEditorState = EditorState.push(
    this.state.editorState,
    newContentState,
    'apply-entity'
  );

  this.onChange(newEditorState);
}
```

### Code
Finally, here is a link for the complete source code of the above Editor — https://github.com/fatman-/learn-draftjs/blob/master/src/components/DraftTuts/Entities/Editor.js
