import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  state = {
    army: []
  };
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard bot={bot} handleClick={this.props.handleClick} />
          ))}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
