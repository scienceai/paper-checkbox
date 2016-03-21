import React from 'react';
let { any, bool, func, string } = React.PropTypes;

export default class PaperCheckbox extends React.Component {
  render() {
    let { children, disabled, theme } = this.props;
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
  theme: string
};

class Checkbox extends React.Component {
  render() {
    let { checked, disabled, id, onClick } = this.props;
    let checkbox = (
      <div className='checkbox'>
        <div className='checkmark' />
      </div>
    );
    if (id) {
      return (
        <div
          {...this.props}
          id={id}
          className='checkbox-container'
          role='checkbox'
          aria-checked={!!checked}
          aria-disabled={!!disabled}
          tabIndex='0'
          onClick={e => onClick(e)}
        >
          {checkbox}
        </div>
      );
    } else {
      return (
        <div
          {...this.props}
          className='checkbox-container'
          role='checkbox'
          aria-checked={!!checked}
          aria-disabled={!!disabled}
          tabIndex='0'
          onClick={e => onClick(e)}
        >
          {checkbox}
        </div>
      );
    }
  }
}
Checkbox.propTypes = {
  checked: bool,
  disabled: bool,
  id: string,
  onClick: func
};

class Label extends React.Component {
  render() {
    let { children, disabled, id } = this.props;
    return (
      <label
        htmlFor={id}
        className='checkbox-label'
        aria-disabled={!!disabled}
      >
        {children}
      </label>
    );
  }
}
Label.propTypes = {
  children: any.isRequired,
  disabled: bool,
  id: string.isRequired
};
