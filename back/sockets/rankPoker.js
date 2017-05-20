const _ = require("lodash");

const countOccurences = (list, value) => {
  return _.filter(list, o => {
    return o.indexOf(value) >= 0;
  }).length;
};

const RANKS_ = "23456789TJQKA";
const ADJUSTED_SCORES = [[0], [3, 1, 2], [3, 1, 3], [5]];
const getCards = handString => {
  return handString.split(" ");
};

const concat=(str,item)=>{
  return str+item;
}

const pad=(str,item)=>{
  return str+("0000" + item).slice(-2);
}

const max=(possible)=>{
  j=0;
  for(i=0;i<possible.length;i++){
    if(possible[i][0].reduce(concat,"")>possible[j][0].reduce(concat,"")){
      j=i;
    }
    else if(possible[i][0].reduce(concat,"")==possible[j][0].reduce(concat,"")){
      if(possible[i][1].reduce(pad,"")>possible[j][1].reduce(pad,"")){
        j=i;
      }
    }
  }
  return possible[j];
}

const rankHand = handString => {
  const hand = getCards(handString);
  const handLength = _.size(hand);
  if (handLength > 5) {
    const possible = [];
    _.times(handLength, i => {
      const a = hand.slice(0, i);
      const b = hand.slice(i + 1);
      const r = rankHand(a.concat(b).join(" "));
      possible.push(r);
    });
    return max(possible);
  }
  const RANK_MAP = {};
  _.each(hand, (card, i) => {
    const [cardRank, cardSuit] = card.split("");
    const rankIndex = RANKS_.indexOf(cardRank);
    RANK_MAP[rankIndex] = countOccurences(hand.join(""), cardRank);
  });

  const tuples = _.map(RANK_MAP, (occurences, k) => {
    return [occurences, k].map(Number);
  });
  const sortedTuples = _.sortBy(tuples, ["0", "1"]);
  
  let [score, ranks] = [
    _.map(sortedTuples, "0").reverse(),
    _.map(sortedTuples, "1").reverse()
  ];
  
  if (score.length === 5) {
    ranksSplit = ranks.slice(0, 2);
    if (ranksSplit[0] === 12 && ranksSplit[1] === 3) {
      ranks = [3, 2, 1, 0, -1];
    }
    const uniqueSuits = _.uniq(_.map(hand, "1"));
    const flush = uniqueSuits.length === 1 ? 1 : 0;
    const straight = ranks[0] - ranks[4] === 4 ? 1 : 0;
    const adjustmentIndex = parseInt(`${flush}${straight}`, 2);
    score = ADJUSTED_SCORES[adjustmentIndex];
  }
  return [score, ranks];
};

const holdEm = (boardString, handsList) => {
  return scores = _.map(handsList, (hand, i) => {
    const handString = `${boardString} ${hand}`;
    return rankHand(handString);
  });
};

// qwe=[
//   {
//     id:128,
//     status:2,
//     TableUserId:123,
//     totalbet:10,
//     eval:[
//       [2,1,1,1],[1,10,9,6]
//     ]
//   },{
//     id:127,
//     status:2,
//     TableUserId:122,
//     totalbet:10,
//     eval:[
//       [2,1,1,1],[10,9,6,4]
//     ]
//   }
// ]
// distribute(qwe);
module.exports={
  holdEm
}
