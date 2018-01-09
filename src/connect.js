import * as React from "react";
import { connect as originalConnect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

const connect = (mapStateToProps, mapDispatchToProps) => component => {
  const Wrapped = originalConnect(
    mapStateToProps,
    (dispatch, ownProps) => {
      const pkgActions = bindActionCreators(ownProps.actions, dispatch);
      if (typeof mapDispatchToProps === "function") {
        const userActions = mapDispatchToProps(dispatch, ownProps);
        return {
          ...pkgActions,
          ...userActions
        };
      }
      return pkgActions;
    },
    null
  )(component);

  class Wrapper extends React.Component {
    render() {
      const actions = this.context.store.actions;
      const selectors = this.context.store.selectors;
      return (
        <Wrapped actions={actions} selectors={selectors} {...this.props} />
      );
    }
  }

  Wrapper.contextTypes = {
    store: PropTypes.object
  };

  return Wrapper;
};

export default connect;
