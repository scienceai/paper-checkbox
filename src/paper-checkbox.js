import React from 'react';
let { any, bool, func, string } = React.PropTypes;

// eslint-disable-next-line react/prefer-stateless-function
export default class PaperCheckbox extends React.Component {
  render() {
    let { children, theme } = this.props;
    let classes = `paper-checkbox${theme ? ` ${theme}` : ''}`;
    return (
      <div className={classes}>
        <Checkbox {...this.props} />
        {children && <Label {...this.props} />}
      </div>
    );
  }
}
PaperCheckbox.propTypes = {
  children: any,
  disabled: bool,
  theme: string,
};

function Checkbox({ checked, disabled, id, onClick, ...props }) {
  let checkbox = (
    <div className="checkbox">
      <div className="checkmark" />
    </div>
  );
  if (id) {
    return (
      <div
        {...props}
        id={id}
        className="checkbox-container"
        role="checkbox"
        aria-checked={!!checked}
        aria-disabled={!!disabled}
        tabIndex="0"
        onClick={e => onClick(e)}
      >
        {checkbox}
      </div>
    );
  }

  return (
    <div
      {...props}
      className="checkbox-container"
      role="checkbox"
      aria-checked={!!checked}
      aria-disabled={!!disabled}
      tabIndex="0"
      onClick={e => onClick(e)}
    >
      {checkbox}
    </div>
  );
}
Checkbox.propTypes = {
  checked: bool,
  disabled: bool,
  id: string,
  onClick: func,
};

function Label({ children, disabled, id, onClick }) {
  return (
    <label
      htmlFor={id}
      className="checkbox-label"
      aria-disabled={!!disabled}
      onClick={e => onClick(e)}
    >
      {children}
    </label>
  );
}
Label.propTypes = {
  children: any.isRequired,
  disabled: bool,
  id: string.isRequired,
  onClick: func.isRequired,
};
