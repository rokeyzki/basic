import React from 'react';
import PropTypes from 'prop-types';

/**
 * In order to compatible with the tsx
 * @augments {React.Component<*, *>}
 */
export class HelloES extends React.PureComponent {
  render() {
    return (
      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    );
  }
}

HelloES.propTypes = {
  compiler: PropTypes.string.isRequired,
  framework: PropTypes.string.isRequired,
};
