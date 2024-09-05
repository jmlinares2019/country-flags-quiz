import { useEffect, useState } from "react";

import Results from './Results';

function Quiz(props){

    const { countries, okCountryData, okCountry, okCountryFlag, handleCount, score, setScore, questionsCount, setQuestionsCount } = props;

    const capital = okCountryData?.capital[0];

    const [answer, setAnswer] = useState("");

    const [showHint, setShowHint] = useState(false);

    const [seenHint, setSeenHint] = useState(false);

    const handleClick = (e) => {
        setAnswer(e.target.value);
        console.log(answer)
    }

    function handleAnswer(e){
        e.preventDefault();
        let isCorrect = false;
        if(answer === okCountry){
            isCorrect = true;
            handleCount(isCorrect, seenHint);
        } else {
            handleCount(isCorrect);
        } 
    }

    // showing / hiding capital
    function toggleHint(){
        setShowHint(showHint => !showHint)
        setSeenHint(true);
    }

    // hide capital when new question
    useEffect(() => {
        setShowHint(false)
        setSeenHint(false)
    }, [questionsCount])

    return (
        <div className="container">
        {questionsCount < 5 ? 
            <>
            <div className="row">
                <p>Round {questionsCount + 1}</p>
                <p>Score: {score}</p>
            </div>
            <div className="row quiz-wrapper">
                <div className="col-6 flag-wrapper">
                    <img 
                        src={okCountryFlag} 
                        className="w-100"
                    />
                    <button onClick={toggleHint}>
                        <i className="bi bi-info-circle-fill"></i>
                        <p style={{ display: showHint ? "inline" : "none" }}>Its capital is {capital}</p>
                    </button>
                    
                </div>
                <form 
                    className="col-6 form-wrapper"
                    onSubmit={handleAnswer}>
                    {countries?.map((country, index) => (
                        <div 
                            // assigning a unique key, unique even for every time the component re-renders (next question) prevents inputs being checked by default cause they share key with previous ones
                            key={`${index} + "-" + ${country}`}
                            className="form-check">
                            <label 
                                className="form-check-label" 
                                htmlFor={country}>
                                {country}
                                <input 
                                    className="form-check-input" type="radio" 
                                    name="answer" 
                                    // id="exampleRadios1" 
                                    value={country}
                                    onChange={handleClick}     
                                />
                            </label>
                        </div>
                    ))}
                    <button 
                        className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
            </>
        :
            <Results
                questionsCount={questionsCount}
                setQuestionsCount={setQuestionsCount}
                score={score} 
                setScore={setScore}
            />
        }
        </div>      
    )
}

export default Quiz