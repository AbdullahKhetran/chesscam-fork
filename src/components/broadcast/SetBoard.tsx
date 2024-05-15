import { useState } from "react"

export default function SetBoard() {
  const [whiteName, setWhiteName] = useState()
  const [blackName, setBlackName] = useState()


  const handleWhiteChange = (e:any) => {
    console.log(e.target.value)
    setWhiteName(e.target.value)
  }

  const handleBlackChange = (e:any) => {
    console.log(e.target.value)
    setBlackName(e.target.value)
  }

  function handleSubmit(e:any){
    e.preventDefault()
    console.log(`whiteName: ${whiteName} blackName: ${blackName}`)
    // todo: send a pgn request to make the board appear
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
        <button type="submit" className="submit-button">Setup</button>
      </form>
    </div>
  )
}
