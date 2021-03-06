import { TennisGame1 } from './game1/game1'
import { Player as Player1 } from './game1/player'
import { TennisGame2 } from './game2/game2'
import { Player as Player2 } from './game2/player'
import { TennisGame3 } from './game3/game3'
import { Player as Player3 } from './game3/player'

const allScores = [
  [0, 0, 'Love-All'],
  [1, 1, 'Fifteen-All'],
  [2, 2, 'Thirty-All'],
  [3, 3, 'Deuce'],
  [4, 4, 'Deuce'],

  [1, 0, 'Fifteen-Love'],
  [0, 1, 'Love-Fifteen'],
  [2, 0, 'Thirty-Love'],
  [0, 2, 'Love-Thirty'],
  [3, 0, 'Forty-Love'],
  [0, 3, 'Love-Forty'],
  [4, 0, 'Win for player1'],
  [0, 4, 'Win for player2'],

  [2, 1, 'Thirty-Fifteen'],
  [1, 2, 'Fifteen-Thirty'],
  [3, 1, 'Forty-Fifteen'],
  [1, 3, 'Fifteen-Forty'],
  [4, 1, 'Win for player1'],
  [1, 4, 'Win for player2'],

  [3, 2, 'Forty-Thirty'],
  [2, 3, 'Thirty-Forty'],
  [4, 2, 'Win for player1'],
  [2, 4, 'Win for player2'],

  [4, 3, 'Advantage player1'],
  [3, 4, 'Advantage player2'],
  [5, 4, 'Advantage player1'],
  [4, 5, 'Advantage player2'],
  [15, 14, 'Advantage player1'],
  [14, 15, 'Advantage player2'],

  [6, 4, 'Win for player1'],
  [4, 6, 'Win for player2'],
  [16, 14, 'Win for player1'],
  [14, 16, 'Win for player2'],
]

describe('TennisGame1', () => {
  test.each(allScores)(
    'score of %s-%s should be %s',
    (player1Points, player2Points, expectedScore) => {
      const game = new TennisGame1(
        new Player1('player1', player1Points),
        new Player1('player2', player2Points)
      )

      const result = game.getScore()

      expect(result).toEqual(expectedScore)
    }
  )
})

describe('TennisGame2', () => {
  test.each(allScores)(
    'score of %s-%s should be %s',
    (player1Points, player2Points, expectedScore) => {
      const game = new TennisGame2(
        new Player2('player1', player1Points),
        new Player2('player2', player2Points)
      )

      const result = game.getScore()

      expect(result).toEqual(expectedScore)
    }
  )
})

describe('TennisGame3', () => {
  test.each(allScores)(
    'score of %s-%s should be %s',
    (player1Points, player2Points, expectedScore) => {
      const game = new TennisGame3(
        new Player3('player1', player1Points),
        new Player3('player2', player2Points)
      )

      const result = game.getScore()

      expect(result).toEqual(expectedScore)
    }
  )
})
