// @flow
import * as React from 'react';
import {
  connect as originalConnect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import PropTypes from 'prop-types';

import type {MapStateToProps, MapDispatchToProps, Connector} from 'react-redux';
import type { Dispatch} from "redux";


const connect = <S, A: { type: $Subtype<string> }, OP: {}, SP: {}, DP: {}>(mapStateToProps?: MapStateToProps<S, OP, SP>, mapDispatchToProps?: MapDispatchToProps<A, OP, DP>) => (component: React.ComponentType<any>): React.ComponentType<OP> => {

  const Wrapped = originalConnect(mapStateToProps, (dispatch: Dispatch<A>, ownProps: {actions : {}} & OP) => {
    const pkgActions = bindActionCreators(ownProps.actions, dispatch);
    if(typeof mapDispatchToProps === 'function') {
      const userActions = mapDispatchToProps(dispatch, ownProps);
      return {
        ...pkgActions,
        ...userActions
      };
    }
    return pkgActions;
  }, null)(component);

  class Wrapper extends React.Component<OP> {
    render(){
      const actions: {} = this.context.store.actions;
      return <Wrapped actions={actions} {...this.props} />;
    }
  }

  Wrapper.contextTypes = {
    store: PropTypes.object
  }

  return Wrapper;
}

export default connect;
