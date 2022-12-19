import Navbar from "../Navbar/Navbar";
import Score from "../Score/Score";
import "./puzzle.css"
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import { useEffect, useState } from "react";
import PuzzleForm from "./PuzzleForm";

function DailyPuzzle({me, handleScoreToDo}){
    const image = "https://random.imagecdn.app/300/300"
    const [row, setRow] = useState("")
    const [column, setColumn] = useState("")

    function handleSolved(){
        alert("solved! You just earned a point towards your total score")
        handleScoreToDo()
        
    }

   
     
    return(
        <>
            <Navbar />
            <Score me={me}/>
            <h1 className="header">Puzzle</h1>
            <h3 className="heading">Refresh to load to a new puzzle!!</h3>
            <img className="puzzleImage" src={image} alt="Image of the puzzle"/>
            <div className="puzzle">
                <JigsawPuzzle
                imageSrc={image}
                rows={4}
                columns={4}
                // onSolved={() => alert('Solved!')}/>
                onSolved={() => handleSolved()}/>
            </div>  
        </>
    )
}
export default DailyPuzzle;