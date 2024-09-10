
function Button({type,text,btnStyle,onClickHandler}){

    return(
        <>
        <button
        type={type}
        className={btnStyle}
        onClick={onClickHandler}
        >
                {text}
        </button>
        </>
    )
}

export default Button;