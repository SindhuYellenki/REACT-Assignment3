import './index.css'

const EndCard = props => {
  const {score, time, restartTheGame} = props

  const onClickRestart = () => {
    restartTheGame()
  }

  return (
    <div className="bg-container">
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
        <p className="para">
          Score: <span className="header-text">{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="header-text">{time} sec</p>
        </div>
      </div>
      <div className="score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className=""
        />
        <p>Your Score</p>
        <p className="score">{score}</p>
        <button type="button" onClick={onClickRestart}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
            alt="reset"
            className="reset"
          />
          <p>PLAY AGAIN </p>
        </button>
      </div>
    </div>
  )
}

export default EndCard
