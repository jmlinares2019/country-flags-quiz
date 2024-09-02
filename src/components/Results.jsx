function Results(props){

    const result = props.result;
    return (
        <>
        { result >= 3 ? 
            "Congratulations, you won!"
        :
            "Oh, looks like you're a looser"}
        </>
    )
} 

export default Results