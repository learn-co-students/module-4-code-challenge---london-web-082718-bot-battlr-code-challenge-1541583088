import React from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import BotSpecs from '../components/BotSpecs';
class BotsPage extends React.Component {

  constructor() {
    super()
    this.state = {
    botData: [],
    enlistedBots: [],
    enlisted: false,
    selectedBot: null
  }}

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => this.setState({botData: bots}))
 }
 
  enlistBot = clickedBot => {
    const enlistedBot = this.state.botData.filter(bot => bot.id === clickedBot.id)
    const newEnlistedBots = this.state.enlistedBots.filter(bot => bot.id !== clickedBot.id)
    const newBots = this.state.botData.filter(bot => bot.id !== clickedBot.id)
    this.state.enlisted ? this.setState({ 
                    botData: [...this.state.botData, enlistedBot], 
                    enlisted: false, 
                    enlistedBots: newEnlistedBots,
                    selectedBot: null}) :
    this.setState({ botData: newBots,
                    enlistedBots: [...this.state.enlistedBots, clickedBot],
                    enlisted: true,
                    selectedBot: null 
                    })
    }

  selectBot = bot => {
    this.setState({ selectedBot: bot })
  }

  deselectBot = () => {
    this.setState({ selectedBot: null })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botData} enlistedBots={this.state.enlistedBots} enlistBot={this.enlistBot} enlisted={this.state.enlisted} selectBot={this.selectBot} deselectBot={this.deselectBot} />
        { 
          this.state.selectedBot ?
            <BotSpecs bot={this.state.selectedBot} enlistBot={this.enlistBot} enlisted={this.state.enlisted} selectBot={this.selectBot} deselectBot={this.deselectBot} /> 
          :
            <BotCollection bots={this.state.botData} enlistedBots={this.state.enlistedBots} enlistBot={this.enlistBot} enlisted={this.state.enlisted} selectBot={this.selectBot} deselectBot={this.deselectBot}/>
        }
        </div>
    );
  }

}

export default BotsPage;
