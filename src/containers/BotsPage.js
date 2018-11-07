import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {

  state = {
    bots: [],
    myBotArmy: []
  }

  componentDidMount() {
    return fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => this.setState({bots}))
  }

  addToBotArmy = (bot) => {
    this.setState({
      myBotArmy : [...this.state.myBotArmy, bot]
    }) 
  }

  removeBotFromArmy = (bot) => {
    this.setState({
      myBotArmy : [this.state.myBotArmy].filter((e) => e !== bot),
      // same condition below
    }) 
  }

  render() {
    const { bots, myBotArmy } = this.state
    const { addToBotArmy, removeBotFromArmy } = this
    return (
      <div>
       <BotCollection
       bots={bots} myBotArmy={myBotArmy} addToBotArmy={addToBotArmy}
      removeBotFromArmy={removeBotFromArmy} />
      </div>
    );
  }

}

export default BotsPage;
