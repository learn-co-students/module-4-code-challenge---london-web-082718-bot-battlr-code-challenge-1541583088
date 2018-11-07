import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state = {
    bots: [],
    botArmy: [],
    currentBot: null,
    currentPage: 'collection'
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

  selectCurrentBot = (bot) => {
    this.setState({currentBot: bot})
    this.renderBotsPage()
  }

  renderBotsPage = () => {
    this.state.currentPage === 'collection' ?
    // something to render YourBotArmy and Bot Collection 
    null
    :
    // something to render BotSpecs for currentBot
    null
  }

  render() {
    return (
      <div>
        {/* < BotSpecs bot={this.state.currentBot} enlistBot={this.enlistBot} /> */}
        < YourBotArmy botArmy={this.state.botArmy} />
        < BotCollection bots={this.state.bots} enlistBot={this.enlistBot} selectCurrentBot={this.selectCurrentBot} />
        
      </div>
    );
  }

}

export default BotsPage;
