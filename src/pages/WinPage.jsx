export default function WinPage({triesCount, resetGame}) {
    
    return (
        <div>
            <h2>Congratulations!</h2>
            <h4>You finished the game in</h4>
            <h3>{triesCount}</h3>
            <h4>tries</h4>
            <button onClick={resetGame}>Play Again</button>
        </div>
    );

}