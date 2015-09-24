# `<PaperCheckbox />`

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
* `disabled: Boolean`: Optional. Determines whether the.
* `onClick: Function`: Optional. Called when the `<PaperCheckbox>` component is clicked.

### Example
```js
<PaperCheckbox
  checked={this.state.clicked}
  onClick={() => this.setState({ clicked: !this.state.clicked })}
/>
```
