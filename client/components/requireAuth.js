import React, { Component } from "react";
import query from "../queries/CurrentUser";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

export default (WrappedComponent) => {
  class requireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(query)(requireAuth);
};
