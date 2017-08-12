---

## Explanation

The official recommended way of using decorators is super simple; there is a strategy; a function which searches for patterns in content blocks, and decorates them (with a corresponding component)... and you can compose multiple decorators with DraftJS' `CompositeDecorator`.

The above example has two decorators, one for decorating hashtags, and the other for mentions; ala Twitter style!

You pass the decorators' info during an EditorState initialization.

```jsx
constructor() {
  ...
  const compositeDecorator = new CompositeDecorator([
    {
      strategy: handleStrategy,
      component: HandleSpan
    }, {
      strategy: hashtagStrategy,
      component: HashtagSpan
    }
  ]);

  this.state = {
    editorState: EditorState.createEmpty(compositeDecorator)
  };
  ...
}
```

Following are the code snippets for the above strategies, and the corresponding components.

```jsx
/**
* Super simple decorators for handles and hashtags, for demonstration
* purposes only. Don't reuse these regexes.
*/

const HANDLE_REGEX = /\@[\w]+/g;
const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;

function handleStrategy(contentBlock, callback, contentState) {
	findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

function hashtagStrategy(contentBlock, callback, contentState) {
	findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
	const text = contentBlock.getText();
	let matchArr,
		start;
	while ((matchArr = regex.exec(text)) !== null) {
		start = matchArr.index;
		callback(start, start + matchArr[0].length);
	}
}

const HandleSpan = (props) => {
	return (
		<span style={styles.handle} data-offset-key={props.offsetKey}>
			{props.children}
		</span>
	);
};

const HashtagSpan = (props) => {
	return (
		<span style={styles.hashtag} data-offset-key={props.offsetKey}>
			{props.children}
		</span>
	);
};
```
