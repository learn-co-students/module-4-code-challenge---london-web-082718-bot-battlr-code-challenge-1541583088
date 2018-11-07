import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {
              this.props.myBots.map((bot, idx) => <BotCard
              key={idx} bot={bot}
              includeMyBots={this.props.myBots.includes(bot)}
              removeBotFromArmy={this.props.removeBotFromArmy}
               />
              )
            }
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
