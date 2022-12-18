import Navbar from "../Navbar/Navbar";
import Score from "../Score/Score";
import "./puzzle.css"

import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'


function DailyPuzzle({me, handleScoreToDo}){

    const image = "https://cdn.shopify.com/s/files/1/1259/9857/products/f43a89e9-6bcf-4f7d-b18c-37a8ca5ff09f_1280x960.jpg?v=1643191893"
    function handleSolved(){
        alert("solved!")
        handleScoreToDo()
        
    }
    return(
        <>
            <Navbar />
            <Score me={me}/>
            <h1 className="header">Puzzle</h1>
            <img className="puzzleImage" src={image} alt="Image of the puzzle"/>
            <div className="puzzle">
                <JigsawPuzzle
                imageSrc={image}
                rows={2}
                columns={2}
                // onSolved={() => alert('Solved!')}/>
                onSolved={() => handleSolved()}/>

            </div>  
        </>
    )
}
export default DailyPuzzle;