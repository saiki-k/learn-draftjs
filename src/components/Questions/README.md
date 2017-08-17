This is a list of questions from [https://draftjs.slack.org](https://draftjs.slack.org). Feel free to edit this page here — https://github.com/fatman-/learn-draftjs/tree/master/src/components/Questions/README.md

---

### On the working of entities

Can an entity be applied at more than one SelectionState or are entities always applied to one range?

Also what happens to entities that are in the ContentState which are never applied to a SelectionState? Are they useful in anyway? Are they garbage collected at some point?

What I don’t get is why do you first add the entity to the ContentState and then apply it to a range? Is there some sort of benefit to having an entity in the ContentState without be applied anywhere?

### Answer

> Can an entity be applied at more than one SelectionState or are entities always applied to one range?

Entities are applied to characters in a block. We specify a `SelectionState` to apply them on a range of characters.

What happens when you create an entity — an object of the form `{ type, mutability, data }` gets added to the `entityMap` which is stored as a part of the content state: Suppose we create two entities whose `type` equal to `LINK`, and whose `mutability` is `IMMUTABLE`, and with their `data` as `{ url: draftjs.org }`, and `{ url: learn-draftjs.now.sh }`; you get an entity map like below:

```javascript
{
  0: {
    "type": "LINK",
    "mutability": "IMMUTABLE",
    "data": { url: draftjs.org }
  },
  1: {
    "type": "LINK",
    "mutability": "IMMUTABLE",
    "data": { url: learn-draftjs.now.sh }
  }
}
```

You see the `0`, and `1`? They are the entity keys; Now you can use these keys to apply the entity to as many characters (as many `SelectionState`s) as you want! No need to keep generating new entities.

Imagine the following sentence to be a part of a draft content block, and the word `keyword` is linked with draftjs.org

Hi! [Keyword](draftjs.org)

The `ContentState` representation (i.e., in plain JavaScript, remember these are ImmutableJS objects) of the above line (or more precisely,`ContentBlock`) would look something like this:
```javascript
{
  "blockMap": {
      "8mqm9": {
          "key": "8mqm9",
          "type": "unstyled",
          "text": "Hi! Keyword",
          "characterList": [
              {
                  "style": [],
                  "entity": null
              },
              {
                  "style": [],
                  "entity": null
              },
              {
                  "style": [],
                  "entity": null
              },
              {
                  "style": [],
                  "entity": null
              },
              {
                  "style": [],
                  "entity": 0
              },
              {
                  "style": [],
                  "entity": 0
              },
              {
                  "style": [],
                  "entity": 0
              },
              {
                  "style": [],
                  "entity": 0
              },
              {
                  "style": [],
                  "entity": 0
              },
              {
                  "style": [],
                  "entity": 0
              },
              {
                  "style": [],
                  "entity": 0
              }
          ],
          "depth": 0,
          "data": {}
      }
  },
  ...
}
```

The `characterList`, as you see is a list of `CharacterMetadata` objects; which take the form `{ style: SOME_INLINE_STYLE, entity: AN_ENTITY_KEY }`. Observe how in the above example, all characters except `Hi! ` (there's a space too) have an entity attached to them!

> Also what happens to entities that are in the ContentState which are never applied to a SelectionState? Are they useful in anyway? Are they garbage collected at some point?

This is a good question. Entities used to be managed separately prior to v0.10; but it created a couple of problems, such as quirky Entity API, and the EditorState not being re-rendered when an entity's data is updated.

With v0.10 entities are managed as a part of the `ContentState` object; the entities that are created but are never used would just stay as a part of the `ContentState` object. From what I can deduce from the code, they would stay so until the `ContentState` object itself is garbage collected.

But we don't need to concern ourselves about this, because:
- one, we wouldn't just keep creating entities willy nilly :D
- even if we do, it is just a small JS obj with the above three attributes; them causing a memory leak is a far fetched idea!
- created entities are reusable, as long as we have access to the keys

> What I don’t get is why do you first add the entity to the ContentState and then apply it to a range? Is there some sort of benefit to having an entity in the ContentState without be applied anywhere?

Yes, this has two advantages;
- say we update an existing entity's data; we don't need to update it everywhere it is referenced in the editor (the source of truth of information on an entity is only with `ContentState` object's `entityMap`
- two, because it is a part of the `ContentState`; an update to an existing entity would, as expected, cause a re-render with an updated `ContentState` (with updated  entity data)

---

### Is there a way to grab the bounding rect of a ContentBlock in Draft?

### Answer

Given a `blockKey` you can find the required block element in the DOM, using the following piece of code!
```javascript
const domNodeForBlock = document.querySelector(`div[data-offset-key="${blockKey}-0-0"]`);
```

And then, you could use:
```javascript
const boundingRect = domNodeForBlock.getBoundingClientRect();
```

---

### How would you trigger some sort of handler when a certain type of block is deleted?

### Answer

I handle these through post-change functions. Following is a simple `onChange` function, right?

```jsx
onChange = (editorState) => this.setState({ editorState });
```

The above can be re-written as:

```jsx
onChange = (editorState) => {
  const oldEditorState = this.state.editorState;
  this.setState(
    { editorState },
    () => this.postChangeFn(oldEditorState)
  )
}
```

`this.postChangeFn` is a function which is fired post every state change. You can use this to check for
- user mentions (`@` strings)
- detect if any special elements are to be rendered (say a floating toolbar for formatting text on a selection)
- in your case, a comparison of the `oldEditorState`'s block map with the new editor state (i.e., `this.state.editorState`); and check if its blockMap is missing a particular type of a block

```jsx
postChangeFn = (oldEditorState) => {
  // Caution: I did not test the following at all
  const oldContentState = oldEditorState.getCurrentContent();
  const newContentState = this.state.editorState.getCurrentContent();

  if (
    oldContentState.getBlockMap().size >
    newContentState.getBlockMap().size
  ) {
    let deletedTypes = [];
    const blockMapWithDeletedKeys = oldContentState.getBlockMap().filter(
      (block, key) => !newContentState.getBlockMap().has(key)
    ).map((block, key) => {
      deletedTypes.push(block.get('type'));
      return block;
    })
    // deletedTypes has the list of block types that have been deleted
    // do with it what you shall! :)
  }
```
