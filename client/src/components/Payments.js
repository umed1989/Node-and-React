import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Books"
        description="50$ for 5 books"
        amount={5000}
        stripeKey={"pk_test_x4qdC8rJzKGlgNDYdwMcrl2e"}
        token={token => this.props.handleToken(token)}
      />
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
