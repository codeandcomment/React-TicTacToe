import { useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

import Blocks from "../components/Blocks/Blocks";
import GamePage from "./GamePage";

import o from '../assets/o.png'
import x from '../assets/x.png'

function GamePageContainer(){
    
    let items=[];
    const win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    const [totalwin,setTotalWin] = useState({X:0,O:0})
    const [box,resetBox]= useState(0)
    const [player,setPlayer] = useState('X');
    const [isExploding, setIsExploding] = useState(false);
    const [lableData,setLabelData] = useState(`${player} Your Turn`);
    const [running,setRun]= useState(true)
    const [options,setOptions]=useState(["","","","","","","","",""]);

    function onBoxClickHandler(event){
        const index = event.currentTarget.getAttribute('data-index'); 
        
        if(options[index]!="" || !running){
            return true;
        }
        
        const updatedItems = options.map((option, i) => (i == index ? player : option));
        setOptions(updatedItems);
        checkWinner(updatedItems);       
    }
   
    function checkWinner(updatedItems){
        let isWon = false;
        
        for(let i=0;i<updatedItems.length-1;i++) 
        {
                const condition = win[i];
                const box1 = updatedItems[condition[0]];
                const box2 = updatedItems[condition[1]];
                const box3 = updatedItems[condition[2]];
                
                if(box1=='' || box2=='' || box3==''){
                    continue;
                }

                if(box1==box2 && box2==box3){
                    isWon = true
                }
                
            }

            if(isWon){
                setLabelData(`${player} Won The Game`);
                setRun(false);
                if(player=='X'){
                    setTotalWin(prevWin => ({ ...prevWin, X: prevWin.X + 1 }))
                }else{
                    setTotalWin(prevWin => ({ ...prevWin, O: prevWin.O + 1 }))
                }
                setIsExploding({
                    force: 0.8,
                    duration: 3000,
                    particleCount: 250,
                    width: 1600,
                  });
            }else if(!updatedItems.includes("")){
                setLabelData("Game Drawn");
                setRun(false);
            }else{
                changePlayer()
            }
    }


    function restartbtnClickHandler(event){

        setOptions(["","","","","","","","",""]);
        box==1 ? resetBox(0) : resetBox(1)
        setPlayer('X');
        setRun(true);
        setLabelData(`X Your Turn`);
        setIsExploding('');
    }

    function changePlayer(){

       if(player=='X'){
         setPlayer('O') 
         setLabelData(`O Your Turn`);

       }else{ 
        setPlayer('X');
        setLabelData(`X Your Turn`);
       }

    }
    

    function getImage(index){
        if(options[index]==''){
            return '';
        }else if(options[index]=='X'){
            return x;
        }else{
            return o;
        }
    }

    function addBlocks(){
        for (let i = 0; i < 9; i++) {
            items.push(
            <Blocks key={i+box} index={i} 
            onClickHandler={onBoxClickHandler}
            image={getImage(i)}
            >
            </Blocks> );
        
        }
        return items;
    }

    function resetTotalWinHandler(){
        setTotalWin({X:0,O:0})
    }
        return(<>
            {isExploding && <ConfettiExplosion />}
            
            <GamePage 
            totalWin={totalwin}
            labeldata={lableData}
            rstrtbtnClickHandler={restartbtnClickHandler}
            resetTotalWinHandler={resetTotalWinHandler}
            >
                   {addBlocks()}
            </GamePage>
         
            </>);
}

export default GamePageContainer;