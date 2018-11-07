import React from "react";
import BotSpecs from './BotSpecs'

const BotCard = props => {
  const { bot, addToBotArmy, myBotArmy, removeBotFromArmy } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }



  return (
    <div className="ui column" 
        // ON Click for adding to Bot Army
            
              // !myBotArmy.filter(botArmyBot => botArmyBot===bot) ? 
                   
                    // :
                    // null
                    // () => removeBotFromArmy(bot)
                    // 
          

        // 
    >
      <div
        className="ui card" 
        key={bot.id}
        
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>
          <button onClick={() => addToBotArmy(bot) }>Add me to your army </button>
          <button onClick={bot => <BotSpecs bot={bot}/> }> Click for more details </button>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
