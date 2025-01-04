import { useState, useEffect } from 'react';

export default function MemoryGame() {
    const [tiles, setTiles] = useState([]);
    const [isGameStarted, setisGameStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [flippedTiles, setflippedTiles] = useState([])
    const [moves, setMoves] = useState(0)
    const [score, setScore] = useState(0)
    const startGame = () => {
        initializeTiles();
        setisGameStarted(true);
        setTimer(0);
        setMoves(0);
        setScore(0);
        setflippedTiles([]);
    }

    const initializeTiles = () => {
        const tilesArray = ['home', 'delete', 'favorite', 'search', 'bolt', 'home', 'delete', 'favorite', 'search', 'bolt'];
        setTiles(tilesArray.sort(() => Math.random() -0.5 ));
    }

    const flipTile = (tileIndex) => {
        if (flippedTiles.length === 2) {
            
            setflippedTiles([]);
        }
        setMoves(prevMoves => prevMoves+1)
        if (flippedTiles.includes(tileIndex)) return;
        setflippedTiles((prevFlippedTiles) => [...prevFlippedTiles, tileIndex] )
            const [firstTileIndex] = flippedTiles;
            const firstTile = tiles[firstTileIndex];
            const secondTile = tiles[tileIndex];
            console.log(firstTile, secondTile)
            if (firstTile != null && secondTile != null) {
                if (firstTile != secondTile) {

                } else {
                    setScore((prevScore) => prevScore+1)
                    setTimeout(() => {
                        setTiles((prevTiles) => {
                            const newTiles = [...prevTiles];
                            newTiles[firstTileIndex] = null; // Remove first matched tile
                            newTiles[tileIndex] = null; // Remove second matched tile
                            return newTiles;
                        });
                        setScore((prevScore) => prevScore + 1); // Increase score for correct match
                    }, 50);
                }
            }
    }

    useEffect(() => {
        let intervalId;
        if (isGameStarted) {
            intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
                console.log(timer)
            }, 1000);
        }
        
        return () => {
            clearInterval(intervalId);
        };
    }, [isGameStarted]);
    
    useEffect(() => {
        if(isGameStarted) {
        if(tiles.every(tile => tile ===null)) {
            alert(`You won! Time: ${timer}, Moves: ${moves}, Score: ${score}`)
            setisGameStarted(false)
        }
        }
    }, [tiles, isGameStarted])

    return(
        <div>
            {!isGameStarted ? (
            <button 
                className='bg-yellow-200 p-20 aspect-square rounded-md text-rose-900 font-mono border border-yellow-400 hover:bg-yellow-100 transition-all duration-300 ease-in-out'
                onClick={startGame}
            >Game Start!</button>
            ) : (
                <div 
                    className="flex flex-col items-center gap-6"
                >
                    <h1>Game Started</h1>
                    <div 
                        className='grid grid-cols-5 w-full gap-2'
                    >
                        {tiles.map((tile, index) => (
                            <button 
                                key={index}
                                className={`aspect-square p-20 rounded-3xl text-3xl border border-rose-600 ring-0 focus:ring-2 focus:ring-rose-600 transition-all duration-300 ease-in-out 
                                    ${tile == null ? 'bg-gray-300 cursor-not-allowed text-gray-300 border-0' : 'bg-yellow-200 text-rose-900 hover:bg-yellow-100'}`}
                                onClick={() => {flipTile(index)}}
                                disabled={tile === null}  
                            >
                                {
                                flippedTiles.includes(index) ?
                                <span className='material-icons text-rose-600'>  
                                    {tile} 
                                </span>
                                : 
                                <span className='material-icons'>  
                                    X
                                </span>
                                }
                            </button>
                        ))}
                    </div>
                    <h1>Time elapsed: {timer} secs</h1>
                    <h1>Moves: {moves}</h1>
                    <h1>Score: {score}</h1>
                </div>
            )}
        </div>
    )
}