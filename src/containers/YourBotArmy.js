import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  displayAllEnlistedBots = () => {
    return this.props.enlistedBots.map(bot => <BotCard bot={bot} key={bot.id} enlistBot={this.props.enlistBot} enlisted={this.props.enlisted} selectBot={this.props.selectBot} deselectBot={this.props.deselectBot} /> )
  }
  
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
        <div className="row"><h3>Your Bot Army</h3></div>
          <div className="row bot-army-row">
            {this.displayAllEnlistedBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
