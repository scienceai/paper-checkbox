import React from 'react';
let { any, bool, func } = React.PropTypes;

export default class PaperCheckbox extends React.Component {
  render() {
    let { children, disabled } = this.props;
    return (
      <div className='paper-checkbox'>
        <Checkbox {...this.props} />
        {children && <Label {...this.props} />}
      </div>
    );
  }
}
PaperCheckbox.propTypes = {
  children: any,
  disabled: bool
};

class Checkbox extends React.Component {
  render() {
    let { checked, disabled, onClick } = this.props;
    return (
      <div
        {...this.props}
        id='paper-checkbox__checkbox'
        className='checkbox-container'
        role='checkbox'
        aria-checked={!!checked}
        aria-disabled={!!disabled}
        tabIndex='0'
        onClick={e => onClick(e)}
      >
        <div className='checkbox'>
          <div className='checkmark' />
        </div>
      </div>
    );
  }
}
Checkbox.propTypes = {
  checked: bool,
  disabled: bool,
  onClick: func
};

class Label extends React.Component {
  render() {
    let { children, disabled } = this.props;
    return (
      <label
        htmlFor='paper-checkbox__checkbox'
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
  disabled: bool
};
