
const ErrorHandler = (props) => {

    if (props.errors.length > 0){
        return (
            <div className="Errors">
                <div className="main">
                    <h2>Invalid Input</h2>
                {props.errors.map((item)=> <p key={item.id}>{item.message}</p>)}
                    <button onClick={() => props.setErrors([])}>Okay</button>
                </div>

            </div>
        )
    }
    return undefined;
}


export default ErrorHandler;