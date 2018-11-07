import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    bots: [],
    myBots: []

  }

  getBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(response => this.setState({ bots: response }))
  }

  componentDidMount() {
    this.getBots()
  }

  addBotToArmy = (bot) => {
    this.setState({
      myBots: [...this.state.myBots, bot]
    })
  }

  removeBotFromArmy = (bot) => {
    const bots = [...this.state.myBots]
    const updatedMyBots = bots.filter(x => x.name !== bot.name)
    this.setState({ myBots: updatedMyBots })

  }


  render() {
    return (
      <div className="App">
        <BotsPage
        bots={this.state.bots}
        addBotToArmy={this.addBotToArmy}
        myBots={this.state.myBots}
        removeBotFromArmy={this.removeBotFromArmy} />
      </div>
    );
  }
}

export default App;
