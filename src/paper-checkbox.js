import React from 'react';
let { any, bool, func, string } = React.PropTypes;

// eslint-disable-next-line react/prefer-stateless-function
export default class PaperCheckbox extends React.Component {
  render() {
    let { children, theme, ...props } = this.props;
    let classes = `paper-checkbox${theme ? ` ${theme}` : ''}`;
    return (
      <div className={classes}>
        <Checkbox {...props} />
        {children && <Label {...props} children={children} />}
      </div>
    );
  }
}
PaperCheckbox.propTypes = {
  children: any,
  disabled: bool,
  theme: string,
};

function Checkbox({ checked, disabled, onClick, ...props }) {
  return (
    <div
      {...props}
      className="checkbox-container"
      role="checkbox"
      aria-checked={!!checked}
      aria-disabled={!!disabled}
      tabIndex="0"
      onClick={!disabled ? e => onClick(e) : null}
      onKeyDown={!disabled ?
        (e) => {
          if (e.key === 'Space') {
            onClick(e);
          }
        } :
        null
      }
    >
      <div className="checkbox">
        <div className="checkmark" />
      </div>
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
      onClick={!disabled ? e => onClick(e) : null}
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
