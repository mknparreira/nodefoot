const { groupBy } = require('./Index.util');

function defineStartAndAlternatePlayer(teamPlayers, qtdPlayers) {
  // const startTeam = [];
  // const alternateTeam = [];

  const orderPlayersByOverall = teamPlayers.sort(
    (a, b) => parseFloat(b.player.overall) - parseFloat(a.player.overall),
  );

  // const objPlayers = orderByOverall.map((teamPlayer) => teamPlayer.player.overall);
  // const highestOverall = Math.max(...objPlayers);

  // orderByOverall.filter((teamPlayer) => {
  //   if (teamPlayer.player.overall === highestOverall) {
  //     return startTeam.push(teamPlayer);
  //   }
  //   return alternateTeam.push(teamPlayer);
  // });

  return {
    start: orderPlayersByOverall.slice(0, qtdPlayers),
    alternate: orderPlayersByOverall.slice(qtdPlayers, teamPlayers.length),
  };
}

exports.getCurrentSquad = function getCurrentSquad(squad) {
  const playersPositionGrouped = groupBy(squad, (s) => s.player.position);

  const goalkeepers = playersPositionGrouped.get('GOALKEEPER');
  const defenders = playersPositionGrouped.get('DEFENDER');
  const midfielders = playersPositionGrouped.get('MIDFIELDER');
  const forwards = playersPositionGrouped.get('FORWARD');

  return {
    goalkeepers: defineStartAndAlternatePlayer(goalkeepers, 1),
    defenders: defineStartAndAlternatePlayer(defenders, 4),
    midfields: defineStartAndAlternatePlayer(midfielders, 3),
    fowards: defineStartAndAlternatePlayer(forwards, 3),
  };
};
