import { useState, useEffect } from 'react';

export default function MemoryGame() {
    const [tiles, setTiles] = useState([]);
    const [isGameStarted, setisGameStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const startGame = () => {
        initializeTiles();
        setisGameStarted(true);
    }
    const initializeTiles = () => {
        const tilesArray = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];
        setTiles(tilesArray.sort(() => Math.random() -0.5 ));
        
    }
    return(
        <div>
            {!isGameStarted ? (
            <button 
                className='bg-gray-300 p-2 rounded-md text-gray-600'
                onClick={startGame}
            >Start Game</button>
            ) : (
                <div>
                <h1>Game Started</h1>
                <div>
                {tiles.map((tile, index) => (
                    <button>
                        {tile}
                    </button>
                ))}
                </div>
                </div>
            )}
        </div>
    )
}