function Results(props){
    
    const { questionsCount, setQuestionsCount, score, setScore } = props;

    function startOver(){
        setQuestionsCount(0);
        setScore(0);
    }

    return (
        <>
        <div className="row results-wrapper">
            <p>You scored {score} out of {questionsCount}</p>
            { score >= 3 ? 
                "Congratulations, you won!"
            :
                "Oh, looks like you're a looser"
            }
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