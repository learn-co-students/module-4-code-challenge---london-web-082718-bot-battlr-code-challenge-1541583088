import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	
	displayAllBots = () => {
    return this.props.bots.map((bot, idx) => <BotCard bot={bot} key={idx} enlistBot={this.props.enlistBot} enlisted={this.props.enlisted} selectBot={this.props.selectBot} deselectBot={this.props.deselectBot}/> )
  }

  render(){
  	return (
  	  <div className="ui four column grid">
			<div className="row"><h3>Collection of all bots</h3></div>
    		<div className="row">
    		   {this.displayAllBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
