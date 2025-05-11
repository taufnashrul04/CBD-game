'use client'
import { useState } from 'react'
import GameHeader from './GameHeader'
import GameOptions from './GameOptions'
import GameResult from './GameResult'
import ScoreBoard from './ScoreBoard'
import ComputerScienceBackground from './ComputerScienceBackground'
import GameHistory from './GameHistory'
import WinAnimation from './WinAnimation'
import winSticker1 from '../assets/ff1.png'
import winSticker2 from '../assets/ff.png'
import winSticker3 from '../assets/ff3.webp'

export type GameChoice = 'crab' | 'bird' | 'dog' | null

export interface GameHistoryItem {
  playerChoice: GameChoice
  computerChoice: GameChoice
  result: 'win' | 'lose' | 'tie'
  timestamp: Date
}

const GameContainer: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<GameChoice>(null)
  const [computerChoice, setComputerChoice] = useState<GameChoice>(null)
  const [result, setResult] = useState<'win' | 'lose' | 'tie' | null>(null)
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showWinAnimation, setShowWinAnimation] = useState(false)
  const [gameHistory, setGameHistory] = useState<GameHistoryItem[]>([])
  const [showHistory, setShowHistory] = useState(false)

  const determineWinner = (player: GameChoice, computer: GameChoice): 'win' | 'lose' | 'tie' => {
    if (player === computer) return 'tie'
    if (
      (player === 'crab' && computer === 'dog') ||
      (player === 'bird' && computer === 'crab') ||
      (player === 'dog' && computer === 'bird')
    ) {
      return 'win'
    }
    return 'lose'
  }

  const generateComputerChoice = (): GameChoice => {
    const choices: GameChoice[] = ['crab', 'bird', 'dog']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
  }

  const handlePlayerChoice = (choice: GameChoice) => {
    if (isAnimating) return

    setIsAnimating(true)
    setPlayerChoice(choice)
    setComputerChoice(null)
    setResult(null)
    setShowWinAnimation(false)

    setTimeout(() => {
      const computerSelection = generateComputerChoice()
      setComputerChoice(computerSelection)
      const gameResult = determineWinner(choice, computerSelection)
      setResult(gameResult)

      if (gameResult === 'win') {
        setPlayerScore(prev => prev + 1)
        setShowWinAnimation(true)
        setTimeout(() => setShowWinAnimation(false), 4000)
      } else if (gameResult === 'lose') {
        setComputerScore(prev => prev + 1)
      }

      const historyItem: GameHistoryItem = {
        playerChoice: choice,
        computerChoice: computerSelection,
        result: gameResult,
        timestamp: new Date(),
      }

      setGameHistory(prev => [historyItem, ...prev])
      setIsAnimating(false)
    }, 1000)
  }

  const resetGame = () => {
    setPlayerChoice(null)
    setComputerChoice(null)
    setResult(null)
    setShowWinAnimation(false)
  }

  const resetScores = () => {
    setPlayerScore(0)
    setComputerScore(0)
  }

  const toggleHistory = () => {
    setShowHistory(prev => !prev)
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      <ComputerScienceBackground />

      <div className="relative z-10 p-4 md:p-8">
        <GameHeader />

        <ScoreBoard
          playerScore={playerScore}
          computerScore={computerScore}
          onResetScores={resetScores}
        />

        <div className="flex flex-col md:flex-row md:gap-8 md:items-start">
          <div className="md:w-1/2">
            <GameOptions
              onSelectOption={handlePlayerChoice}
              disabled={isAnimating}
              selectedOption={playerChoice}
            />
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute -top-20 right-0 flex gap-4 z-50">
              <img
                src={winSticker1}
                alt="Sticker 1"
                className={`w-24 h-24 ${showWinAnimation ? 'animate-bounce' : ''}`}
              />
              <img
                src={winSticker2}
                alt="Sticker 2"
                className={`w-24 h-24 ${showWinAnimation ? 'animate-bounce' : ''}`}
              />
              <img
                src={winSticker3}
                alt="Sticker 3"
                className={`w-24 h-24 ${showWinAnimation ? 'animate-bounce' : ''}`}
              />
            </div>

            <GameResult
              playerChoice={playerChoice}
              computerChoice={computerChoice}
              result={result}
              isAnimating={isAnimating}
              onPlayAgain={resetGame}
            />
          </div>
        </div>

        {showWinAnimation && <WinAnimation />}

        <div className="mt-8 text-center">
          <button
            onClick={toggleHistory}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            {showHistory ? 'Hide History' : 'Show Game History'}
          </button>
        </div>

        {showHistory && <GameHistory history={gameHistory} />}

        <div className="mt-8 text-center">
          <p className="text-black text-sm">
            Pink Crab beats White Dog | Yellow Bird beats Pink Crab | White Dog beats Yellow Bird
          </p>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://succinct-world.xyz"
  className="inline-block text-sm text-blue-600 underline hover:text-blue-800 transition"
  target="_blank" rel="noopener noreferrer"
          >
            ← Back to Succinct Community Hub
          </a>
        </div>
      </div>
    </div>
  )
}

export default GameContainer
