import Navbar from "../Navbar/Navbar";
import Score from "../Score/Score";
import "./puzzle.css"
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import { useEffect, useState } from "react";

function DailyPuzzle({me, handleScoreToDo, setMe}){
    const image = "https://random.imagecdn.app/300/300"
    const [row, setRow] = useState(2)
    const [column, setColumn] = useState(2)
    const [score, setScore] = useState()

    function handleSolved(){
        alert("solved! You just earned a point towards your total score")
        const data = {
            score: me.score + 1
        }
        fetch(`/me/${me.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((r) => r.json())
          .then((me) => setMe(me));
    }

    function handleRefresh(){
        window.location.reload(false)
    }

   function handleDimension(e){
    e.preventDefault()
    console.log(row)
    console.log(column)
   }
     
    return(
        <>
            <Navbar />
            <h1 className="header">Puzzle</h1>
            <form onSubmit={handleDimension} className="puzzleForm"> Specify Puzzle Dimensions:  
                <input value={row} placeholder="specify rows" onChange={(e) => setRow(e.target.value)}/>
                <input value={column} placeholder="specify columns" onChange={(e) => setColumn(e.target.value)}/>
            </form>
            <img className="puzzleImage" src={image} alt="Image of the puzzle"/>
            <div className="puzzle">
                <JigsawPuzzle
                imageSrc={image}
                rows={row}
                columns={column}
                onSolved={() => handleSolved()}/>
            </div>  
            <button className="newPuzzleBtn" onClick={handleRefresh}>Click to Load a New Puzzle</button>
            <Score className="score" me={me}/>
        </>
    )
}
export default DailyPuzzle;