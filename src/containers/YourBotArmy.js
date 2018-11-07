import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const {army} = this.props
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {army.map(army => <BotCard bot={army} key={army.id}/>)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
