import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery } from "@daml/react";
import { ActiveSideOfGame, DrawRequest, GameProposal, GameResult, PassiveSideOfGame } from "@daml-ts/chess-0.2.0/lib/Chess";

export default function GamesTable() {

  const gameProposals = useStreamQuery(GameProposal);
  const activeGames = useStreamQuery(ActiveSideOfGame);
  const passiveGames = useStreamQuery(PassiveSideOfGame)
  const drawRequests = useStreamQuery(DrawRequest);
  const gameResults = useStreamQuery(GameResult);

  return (
    <Contracts
      gameProposals={gameProposals.contracts}
      activeGames={activeGames.contracts}
      passiveGames={passiveGames.contracts}
      drawRequests={drawRequests.contracts}
      gameResults={gameResults.contracts}
    />
  );
}
