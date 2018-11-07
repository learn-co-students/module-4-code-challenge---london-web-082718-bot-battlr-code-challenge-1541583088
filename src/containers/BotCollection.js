import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  {
						this.props.bots.map((bot, idx) => <BotCard key={idx} bot={bot} showBot={this.props.showBot} removeBotFromArmy={this.props.removeBotFromArmy} addBotToArmy={this.props.addBotToArmy} includeMyBots={this.props.myBots.includes(bot)}/> )
					}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
