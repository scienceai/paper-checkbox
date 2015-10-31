import React from 'react';

export default class PaperCheckbox extends React.Component {
  render() {
    let { checked, disabled, onClick } = this.props;
    return (
      <div
        className={`paper-checkbox${disabled ? ' disabled' : ''}`}
        role='checkbox'
        aria-checked={!!checked}
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

let { bool, func } = React.PropTypes;
PaperCheckbox.propTypes = {
  checked: bool,
  disabled: bool,
  onClick: func
};
