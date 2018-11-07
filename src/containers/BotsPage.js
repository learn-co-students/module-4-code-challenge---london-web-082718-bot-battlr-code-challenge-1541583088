import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one



  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
        myBots={this.props.myBots}
        removeBotFromArmy={this.props.removeBotFromArmy}
        addBotToArmy={this.props.addBotToArmy}
        /> 
        <BotCollection
        bots={this.props.bots}
        addBotToArmy={this.props.addBotToArmy}
        myBots={this.props.myBots}
        removeBotFromArmy={this.props.removeBotFromArmy}
        showBot={this.props.showBot}
        />
      </div>
    );
  }

}

export default BotsPage;
