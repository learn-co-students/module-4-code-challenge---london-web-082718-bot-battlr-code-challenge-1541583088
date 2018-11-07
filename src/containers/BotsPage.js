import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    robots: [],
    army: []
  }

  fetchRobots = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(resp => this.setState({robots: resp}))
  }

  componentDidMount(){
    this.fetchRobots()
  }

  chooseRobot = (bot) => {
    this.setState({
      army : [...this.state.army, bot]
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army}/>
        {<BotCollection robots={this.state.robots} chooseRobot={this.chooseRobot}/>}
      </div>
    );
  }

}

export default BotsPage;
