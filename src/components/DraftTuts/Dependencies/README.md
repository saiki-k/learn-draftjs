---

### `react react-dom`

As you might already know by now `draft-js` is a React based rich-text editor framework. So you would obviously need `react` and `react-dom` packages.

### `immutable`

DraftJS stores all the editor data in the form of an immutable record! We will see what that entails, shortly! So `draft-js` also has `immutable` as a dependency.

As a side note, DraftJS' API suffices for the majority of changes you would want to do to a DraftJS' editor content; but from experience, when a situation calls for complex customizations to the editor content, we _would_ use `immutable` API on the corresponding immutable data to get the required changes inside the editor.

### `babel-polyfill`

As DraftJS ships with modern ecmascript features which are not available to IE11, and are not a part of `create-react-app`'s default babel config; we should use a corresponding polyfill.

I'm using `babel-polyfill`. The ideal place to import it is either at the top of your root component, or at the top of your editor component. I'm using `create-react-app`, and my `src\index.js` looks like below.

```jsx
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### Recap

```
$ npm install --save react react-dom draft-js immutable babel-polyfill
```
