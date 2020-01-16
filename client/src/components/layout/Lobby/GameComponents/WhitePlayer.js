import React, { Component } from "react";
import whitePawn from "../../../../assets/images/wP.png";
import { connect } from "react-redux";

export class WhitePlayer extends Component {
  componentDidMount() {
    console.log("WHITE.JS");
    console.log(this.props.game);
  }

  render() {
    return <div className="gameContainer"></div>;
  }
}

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {})(WhitePlayer);
