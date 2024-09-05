function Results(props){
    
    const { questionsCount, setQuestionsCount, score, setScore } = props;

    function startOver(){
        setQuestionsCount(0);
        setScore(0);
    }

    return (
        <>
        <p>You scored {score} out of {questionsCount}</p>
        { score >= 3 ? 
            "Congratulations, you won!"
        :
            "Oh, looks like you're a looser"
        }
        <div className="row">
            <button onClick={startOver}>Try again</button>
            <button>
                <a href="/">Back to home</a>
            </button>
        </div>
        </>
    )
} 

export default Results