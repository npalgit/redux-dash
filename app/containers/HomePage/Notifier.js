import React from 'react';

const Notifier = (props) =>
  <div>
    <span>{props.message} by Customer Id {props.customerId}</span>
    {props.children}
  </div>;

Notifier.propTypes = {
  message: React.PropTypes.string,
  customerId: React.PropTypes.string,
  children: React.PropTypes.element,
};

export default Notifier;
