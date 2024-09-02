function Results(props){
    
    const result = props.result;

    return (
        <>
        <p>Your score is {result}</p>
        { result >= 3 ? 
            "Congratulations, you won!"
        :
            "Oh, looks like you're a looser"}
        </>
    )
} 

export default Results