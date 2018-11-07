import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
		const {robots, chooseRobot, handleSelectedRobot} = this.props
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				
    		  Collection of all bots
					{robots.map(robots => <BotCard handleSelectedRobot={handleSelectedRobot} chooseRobot={chooseRobot} bot={robots} key={robots.id}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
