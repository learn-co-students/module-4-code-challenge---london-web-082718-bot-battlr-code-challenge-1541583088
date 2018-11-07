import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    robots: [],
    army: [],
    selectedRobot: false
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

  handleSelectedRobot = () => {
    this.setState({selectedRobot: !this.state.selectedRobot})
}

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army}/>
        {this.state.selectedRobot ? <BotSpecs handleSelectedRobot={this.handleSelectedRobot} robots={this.props.robots}/> : <BotCollection robots={this.state.robots} chooseRobot={this.chooseRobot} handleSelectedRobot={this.handleSelectedRobot}/>}
      </div>
    );
  }

}

export default BotsPage;
