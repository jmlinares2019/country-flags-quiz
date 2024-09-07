function Results(props){
    
    const { totalQuestions, setQuestionsCount, score, setScore } = props;

    function startOver(){
        setQuestionsCount(0);
        setScore(0);
    }

    return (
        <>
        <div className="row results-wrapper">
            <div className="col">
                <p className="score-message">You scored {score} out of {totalQuestions}</p>
                { score >= ( totalQuestions / 2) ? 
                    "Congratulations, you guessed enough of them!"
                :
                    "Looks like you could do better. Wanna try again?"
                }
            </div>
        </div>
        <div className="row buttons-wrapper">
            <div className="col-6">
                <button className="btn restart-btn" onClick={startOver}>Try again</button>
            </div>
            <div className="col-6">
                <button className="btn home-btn">
                    <a href="/">Back to home</a>
                </button>
            </div>
        </div>
        </>
    )
} 

export default Results