import React from "react";
import BotCard from "../components/BotCard";
import BotsPage from "./BotsPage";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map( bot => < BotCard bot={bot} enlistBot={this.props.enlistBot} />)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
