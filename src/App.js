import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

import BotSpecs from './components/BotSpecs'


class App extends Component {

  state = {
    bots: [],
    myBots: [],
    showBot: ""

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

  showBot = (bot) => {
    const bots = [...this.state.bots]
    const botChosen = bots.filter(x => x.name === bot.name)  
    this.setState({ showBot: botChosen })     
  }


  render() {
    return (
      <div className="App">
      {
        this.state.showBot ? 
        <BotSpecs bot={this.state.showBot} /> :
        <BotsPage
        bots={this.state.bots}
        addBotToArmy={this.addBotToArmy}
        myBots={this.state.myBots}
        removeBotFromArmy={this.removeBotFromArmy}
        shotBotTrue={this.state.showBot.length > 0}
        showBot={this.showBot}
        />
      }
      </div>
    );
  }
}

export default App;
