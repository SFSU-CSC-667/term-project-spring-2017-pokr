const models = require("../models");

const getGameUsers = gameId => {
  return models.GameUser.findAll({
    where: {
      GameId: gameId
    },
    order: [["id", "DESC"]],
    include: {
      model: models.TableUser
    },
    raw: true
  });
};

const getGameUserPlays = (userIds,status) => {
  return models.UserPlay.findAll({
    where: {
      playType: 3,
      gameStatus: status,
      GameUserId: userIds
    },
    order: [["id", "DESC"]]
  });
};

const updateGameContext = gameContext => {
  const { game, newgameusers, lastraised } = gameContext;
  let { statusflag, j } = gameContext;
  let currentflag = false;
  let noofusers = 0;
  while (j <= newgameusers.length) {
    if (currentflag) {
      if (newgameusers[j]["id"] == lastraised || newgameusers[j]["isCurrent"]) {
        if (noofusers == 1) {
          statusflag = "end";
          break;
        } else {
          if (game.status == 4) {
            statusflag = "end";
          } else {
            statusflag = "next";
          }
          break;
        }
      } else {
        if (newgameusers[j]["status"] != 0) {
          if (newgameusers[j]["status"] == 1) {
            statusflag = "current";
            break;
          } else if (lastraised != -1) {
            statusflag = "current";
            break;
          }
        }
      }
    } else {
      if (newgameusers[j]["isCurrent"]) {
        currentflag = true;
      }
    }
    if (newgameusers[j]["status"] != 0) {
      noofusers++;
    }
    j = (j + 1) % newgameusers.length;
  }
  gameContext.j = j;
  gameContext.statusflag = statusflag;
  return gameContext;
};

const resetIsCurrentForGame = gameId => {
  return models.GameUser.update(
    {
      isCurrent: false
    },
    {
      where: {
        GameId: gameId,
        isCurrent: true
      }
    }
  );
};

const setAsCurrentPlayer = (userId, gameId) => {
  return models.GameUser.update(
    {
      isCurrent: true
    },
    {
      where: {
        GameId: gameId,
        id: userId
      }
    }
  );
};

const concat=(str,item)=>{
  return str+item;
}

const pad=(str,item)=>{
  return str+("0000" + item).slice(-2);
}

const check=(list1,list2)=>{
  if(list1[0].reduce(concat,"")>list2[0].reduce(concat,"")){
    return 1;    
  }
  else if(list1[0].reduce(concat,"")==list2[0].reduce(concat,"")){
    if(list1[1].reduce(pad,"")>list2[1].reduce(pad,"")){
      return 1;
    }
    else if(list1[1].reduce(pad,"")==list2[1].reduce(pad,"")){
      return 0;
    }
  }
  return 2;
}

const distribute=(gameusers)=>{
  pots={}
  users={};
  for(i=0;i<gameusers.length;i++){
    if(!pots[gameusers[i]['totalbet']]){
      pots[gameusers[i]['totalbet']]={'players':[],'winners':[]};
    }
    gameusers[i]['winnings']=0;
    users[gameusers[i]['TableUserId']]=gameusers[i];
  }
  for(key in pots){
    for(i=0;i<gameusers.length;i++){
      if(parseInt(key)<=gameusers[i]['totalbet']){
        pots[key]['players'].push(gameusers[i]['TableUserId']);
      }
    }
  }
  for(key in pots){
    winners=[];
    for(i=0;i<pots[key]['players'].length;i++){
      if(users[pots[key]['players'][i]]['status']!=0){
        if(winners.length==0){
          winners.push(pots[key]['players'][i]);
        }
        else{
          val=check(users[pots[key]['players'][i]]['eval'],users[winners[0]]['eval']);
          if(val==1){
            winners=[];
          }
          if(val!=2){
            winners.push(pots[key]['players'][i]);
          }
        }
      }
    }
    for(i=0;i<winners.length;i++){
      users[winners[i]]['winnings']+=Math.floor((parseInt(key)*pots[key]['players'].length)/winners.length);
    }
  }
  return users;
}

module.exports = {
  getGameUsers,
  getGameUserPlays,
  updateGameContext,
  resetIsCurrentForGame,
  setAsCurrentPlayer,
  distribute
};
