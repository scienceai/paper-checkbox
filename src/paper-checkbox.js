import React from 'react';

let { bool, func } = React.PropTypes;

export default class PaperCheckbox extends React.Component {
  render() {
    let { checked, disabled } = this.props;
    return (
      <div
        className={`paper-checkbox${disabled ? ' disabled' : ''}`}
        role='checkbox'
        aria-checked={!!checked}
        tabIndex='0'
        onClick={e => this.props.onClick(e)}
      >
        <div className={`checkbox${checked ? ' checked' : ''}`}>
          <div className='checkmark' />
        </div>
      </div>
    );
  }
}

PaperCheckbox.propTypes = {
  checked: bool,
  disabled: bool,
  onClick: func
};
