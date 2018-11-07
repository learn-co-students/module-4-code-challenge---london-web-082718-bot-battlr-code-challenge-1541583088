import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    botArmy: []
  };

  handleClick = bot => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    });
  };

  // removeBot = bot => {
  //   this.setState((botArmy: removedBot));
  // };
  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(bots => this.setState({ bots: bots }));
  }
  render() {
    return (
      <div>
        <YourBotArmy
          botArmy={this.state.botArmy}
          removeBot={this.handleClick}
        />
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default BotsPage;
