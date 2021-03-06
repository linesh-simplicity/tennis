export class TennisGame3 {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
  }

  getScore() {
    if (this.neitherPlayerReachesForty()) {
      const Scores = ['Love', 'Fifteen', 'Thirty', 'Forty']
      // eslint-disable-next-line prefer-destructuring
      const player1Score = Scores[this.player1.points]

      if (this.player1.points === this.player2.points) {
        return `${player1Score}-All`
      }

      return `${player1Score}-${Scores[this.player2.points]}`
    }

    if (this.isDeuce()) {
      return 'Deuce'
    }

    if (this.isOnePlayerInAdvantage()) {
      return `Advantage ${this.getNameOfPlayerInLead()}`
    }

    return `Win for ${this.getNameOfPlayerInLead()}`
  }

  isDeuce() {
    return this.player1.points === this.player2.points
  }

  getNameOfPlayerInLead() {
    return this.player1.points > this.player2.points
      ? this.player1.name
      : this.player2.name
  }

  isOnePlayerInAdvantage() {
    return (
      (this.player1.points - this.player2.points) *
        (this.player1.points - this.player2.points) ===
      1
    )
  }

  neitherPlayerReachesForty() {
    return (
      this.player1.points < 4 &&
      this.player2.points < 4 &&
      this.player1.points + this.player2.points < 6
    )
  }
}
