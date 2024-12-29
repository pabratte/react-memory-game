import GamePage from "./GamePage";
import WinPage from "./WinPage";

import { useState } from "react";

export default function MainPage() {
  const [showWinPage, setShowWinPage] = useState(false);
  const [triesCount, setTriesCount] = useState(0);

  const showWinPageCallback = (triesCount) => {
    setShowWinPage(true);
    setTriesCount(triesCount);
  };

  const resetGame = () => {
    setShowWinPage(false);
  };

  return (
    <>
      <h1>Memory Game</h1>
      <div>
        {showWinPage ? (
          <WinPage resetGame={resetGame} triesCount={triesCount}></WinPage>
        ) : (
          <GamePage showWinPage={showWinPageCallback}></GamePage>
        )}
      </div>
    </>
  );
}
