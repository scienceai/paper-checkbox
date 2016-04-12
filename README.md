# `<PaperCheckbox />`

[![Build Status](https://travis-ci.org/scienceai/paper-checkbox.svg?branch=master)](https://travis-ci.org/scienceai/paper-checkbox)

### Install
```
npm install paper-checkbox
```

### Using the Component
```js
import PaperCheckbox from 'paper-checkbox';
```

### Using the CSS
```css
@import "/path/to/node_modules/paper-checkbox/dist/paper-checkbox.css";
```

### API
* `checked: Boolean`: Optional. Determines whether the checkbox is displayed as checked or unchecked.
* `children: Any`: Optional. Used as a label for the checkbox.
* `disabled: Boolean`: Optional. Determines whether the checkbox is disabled.
* `id: String`: Required if using a label, optional otherwise.
* `onClick: Function`: Optional. Called when the `<PaperCheckbox>` component is clicked.
* `theme: String`: Optional. Accepts 'light' to add a light theme. Default theme is dark.

### Example
```js
<PaperCheckbox
  id='123'
  checked={this.state.clicked}
  onClick={() => this.setState({ clicked: !this.state.clicked })}
>
  Checkmate
</PaperCheckbox>
```
