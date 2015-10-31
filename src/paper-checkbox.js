import React from 'react';
let { any, bool, func } = React.PropTypes;

export default class PaperCheckbox extends React.Component {
  render() {
    let { children, disabled } = this.props;
    if (children) {
      return (
        <div className={`paper-checkbox${disabled ? ' disabled' : ''}`}>
          <Checkbox {...this.props} aria-labelledby='paper-checkbox-label' />
          <Label {...this.props} />
        </div>
      );
    } else {
      return (
        <div className={`paper-checkbox${disabled ? ' disabled' : ''}`}>
          <Checkbox {...this.props} />
        </div>
      );
    }
  }
}
PaperCheckbox.propTypes = {
  children: any
};

class Checkbox extends React.Component {
  render() {
    let { checked, disabled, onClick } = this.props;
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
        <div className={`checkbox${checked ? ' checked' : ''}`}>
          <div className='checkmark' />
        </div>
      </div>
    );
  }
}
Checkbox.propTypes = {
  checked: bool,
  disabled: bool,
  onClick: func.isRequired
};

class Label extends React.Component {
  render() {
    let { children, disabled } = this.props;
    return (
      <div
        id='paper-checkbox-label'
        className='checkbox-label'
        aria-disabled={!!disabled}
      >
        {children}
      </div>
    );
  }
}
Label.propTypes = {
  children: any.isRequired,
  disabled: bool
};
