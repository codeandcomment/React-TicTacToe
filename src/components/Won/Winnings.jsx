import resetImg from '../../assets/reset.png'

function Winnings({totalWinnings,onClickHandler}){
    return(

         <div class="bg-gray-400 rounded shadow border p-2 w-68 mt-6 grid grid-cols-2 items-center">
            <span>
            <p class="text-gray-700 text-lg "><span className="font-bold text-white">X</span> won <span className="font-bold text-white">{totalWinnings.X} </span> Games</p>
            <p class="text-gray-700 text-lg "><span className="font-bold text-white">O</span> won <span className="font-bold text-white">{totalWinnings.O} </span> Games</p>
            </span>
            
            <img className="w-10 h-10 p-0 ml-10 cursor-pointer hover:bg-gray-300" src={resetImg} onClick={onClickHandler}></img>
        </div>
    )


}


export default Winnings;