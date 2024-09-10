
function Blocks({index,onClickHandler,image}){

    return(<>
        <div data-index={index} 
            onClick={onClickHandler}
        className="w-28 h-28 border-4
        border-yellow-500
        flex-1
         cursor-pointer text-lg
        content-center">
         <img src={image}></img>
        </div>
    </>)
}

export default Blocks;