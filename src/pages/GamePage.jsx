import Button from "../components/Button/Button";
import Winnings from "../components/Won/Winnings";

function GamePage({labeldata,rstrtbtnClickHandler,children,totalWin,resetTotalWinHandler}){
    console.log(totalWin.X)
    return(<>
            <div className="grid grid-cols-[110px_minmax(110px,_1fr)_110px] auto-rows-max">
                {children}
             </div>

            <span className="place-items-center grid">
                    
                    <label className="mt-4">{labeldata}</label>

                    <Button 
                    type="button"
                    text="Restart"
                    btnStyle=" mt-4 place-content-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClickHandler={rstrtbtnClickHandler}
                    />

            </span>

            <Winnings totalWinnings={totalWin} onClickHandler={resetTotalWinHandler}></Winnings>
                
            </>
            
    )
}


export default GamePage;