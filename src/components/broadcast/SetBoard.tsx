import { useState } from "react"
import { userSelect } from "../../slices/userSlice"
import { lichessPushRound } from "../../utils/lichess"
import { START_FEN } from "../../utils/constants"
import { gameSelect } from "../../slices/gameSlice"

// type Props = any

export default function SetBoard({setWhiteName, setBlackName}: any) {
  const [white, setWhite] = useState()
  const [black, setBlack] = useState()
  const [roundId, setRoundId] = useState<string>("")
  const [boardNumber,setBoardNumber] = useState()

  const moves: string = gameSelect().moves;

  const handleWhiteChange = (e:any) => {
    console.log(e.target.value)
    setWhite(e.target.value)
    setWhiteName(e.target.value)
  }

  const handleBlackChange = (e:any) => {
    console.log(e.target.value)
    setBlack(e.target.value)
    setBlackName(e.target.value)
  }

  const hanldeRoundIdChange = (e:any) => {
    console.log(e.target.value)
    setRoundId(e.target.value)
  }  
  const handleBoardNumberChange = (e:any) => {
    console.log(e.target.value)
    setBoardNumber(e.target.value)
  }

  // variables for pushin pgn
  const token = userSelect().token // user token

  // initial pgn
  const broadcastPgn = [
    `[White "${white}"]`,
    `[Black "${black}"]`,
    `[Result "*"]`,
    `[FEN "${START_FEN}"]`,
    `[Board "${boardNumber}"]`,
    `[Site "${boardNumber}"]`,
    "",
    moves
  ].join("\r");

  function handleSubmit(e:any){
    e.preventDefault()
    console.log(`whiteName: ${white} blackName: ${black} `)
    // todo: send a pgn request to make the board appear
    lichessPushRound(token, broadcastPgn, roundId)
  }

  return (    
    <div className="main-div">
      <h4 className="">Setup Lichess Board</h4>
      <form className="form" onSubmit={handleSubmit}>
        <div className="item-div">
          <label className="form-check-label" htmlFor="whiteName">
            White:&nbsp;
          </label>
          <input type="text" id="whiteName" onChange={handleWhiteChange} />
        </div>
        <div className="item-div">
          <label className="form-check-label" htmlFor="blackName">
            Black:&nbsp;
          </label>
          <input type="text" id="blackName" onChange={handleBlackChange} />
        </div>
        <div className="item-div">
          <label className="form-check-label" htmlFor="roundId">
            Round:&nbsp;
          </label>
          <input type="text" id="roundId" onChange={hanldeRoundIdChange} />
        </div>
        <div className="item-div">
          <label className="form-check-label" htmlFor="boradNumber">
            Board:&nbsp;
          </label>
          <input type="text" id="boardNumber" onChange={handleBoardNumberChange} />
        </div>
        <button type="submit" className="submit-button">Setup</button>
      </form>
    </div>
  )
}
