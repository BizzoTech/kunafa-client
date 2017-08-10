import React, {Component} from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import PropTypes from 'prop-types'

export default(mapStateToProps, mapDispatchToProps) => component => {

  const Wrapped = connect(mapStateToProps, (dispatch, ownProps) => {
    const pkgActions = bindActionCreators(ownProps.actions, dispatch);
    if(mapDispatchToProps) {
      const userActions = mapDispatchToProps(dispatch, ownProps);
      return {
        ...pkgActions,
        ...userActions
      };
    }
    return pkgActions;
  })(component);

  class Wrapper extends Component {
    render(){
      return <Wrapped actions={this.context.store.actions} {...this.props} />;
    }
  }

  Wrapper.contextTypes = {
    store: PropTypes.object
  }

  return Wrapper;
}
