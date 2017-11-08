
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import css from './css/header.css';

class TableHeader extends Component {

  render() {
    return (
      <thead>
        {this.props.children}
      </thead>
    );
  }
}

TableHeader.uiName = 'TableHeader';

TableHeader.defaultProps = {
};

TableHeader.propTypes = {
  children: PropTypes.node,
  // style: PropTypes.string,
};

export default TableHeader;
