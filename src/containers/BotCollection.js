import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  

  render(){
		const {bots, myBotArmy, addToBotArmy, removeBotFromArmy} = this.props
  	return (
  	  <div className="ui four column grid">
				<div className="row">
					My Bot Army
					{myBotArmy.map(bot => <BotCard bot={bot} key={bot.id} /> )}
				</div>
    		<div className="row">
					Collection of all bots
					{bots.map(bot => <BotCard bot={bot} key={bot.id} myBotArmy={myBotArmy} addToBotArmy={addToBotArmy} removeBotFromArmy={removeBotFromArmy}/> )}
						
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

// {props.pigs.map(pig => <Pig hidePig={props.hidePig} pig={pig} key={pig.name} />)}