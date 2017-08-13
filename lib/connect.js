var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import { connect as originalConnect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const connect = (mapStateToProps, mapDispatchToProps) => component => {

  const Wrapped = originalConnect(mapStateToProps, (dispatch, ownProps) => {
    const pkgActions = bindActionCreators(ownProps.actions, dispatch);
    if (typeof mapDispatchToProps === 'function') {
      const userActions = mapDispatchToProps(dispatch, ownProps);
      return Object.assign({}, pkgActions, userActions);
    }
    return pkgActions;
  }, null)(component);

  class Wrapper extends Component {
    render() {
      return React.createElement(Wrapped, _extends({ actions: this.context.store.actions }, this.props));
    }
  }

  Wrapper.contextTypes = {
    store: PropTypes.object
  };

  return Wrapper;
};

export default connect;