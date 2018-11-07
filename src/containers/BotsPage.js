import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots: [],
    botArmy: []
  }
   
  getBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(resp => this.setState({bots: resp}))
  } 

  componentDidMount() {
    this.getBots()
  }

  enlistBot = (bot) => {
      !this.state.botArmy.includes(bot) ?
      this.setState({
        botArmy: [...this.state.botArmy, bot] 
      })
      :
      null
  }

  render() {
    return (
      <div>
        < YourBotArmy botArmy={this.state.botArmy} />
        < BotCollection bots={this.state.bots} enlistBot={this.enlistBot} />
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
