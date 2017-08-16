This is a list of questions from [https://draftjs.slack.org](https://draftjs.slack.org). Feel free to edit this page here — https://github.com/fatman-/learn-draftjs/tree/master/src/components/Questions/README.md

---

### Q bounding rect of a block

Is there a way to grab the bounding rect of a ContentBlock in Draft?

### A
You could use:
```javascript
document.querySelector(`div[data-offset-key="${blockKey}-0-0"]`).getBoundingClientRect()
```

---

### Q `forceSelection` & scrolling!

Hi, can someone please help me with the right direction on how to handle a scrolling issue.

I'm implementing a 'tab' key logic: on pressing the tab, the focus is moved to the next part of the document.
I'm using `forceSelection` at the moment, which is working fine, as long as the selection stays in the visible part of the page. When the selection is outside of the visible part of the document, there is no automatic scroll though.

I'm not sure what I'm missing, I would have expected the scroll to happen automatically on forceSelection

### A
`forceSelection` only updates the data model (and the corresponding DOM element) to apply the selection to a specified selection state, and for the editor to have focus! You should implement the scrolling feature yourself! Here's how you would do it; find the next block key; and if it isn't in the viewport, then write some JS to scroll that particular block in the DOM!

Given a `blockKey` you can find the required block element in the DOM, using the following piece of code!
```javascript
const domNodeForBlock = document.querySelector(`div[data-offset-key="${blockKey}-0-0"]`);
```

---
