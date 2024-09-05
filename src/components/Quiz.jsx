import { useEffect, useState, useRef } from "react";

import Results from './Results';

function Quiz(props){
    console.log("Component rendered!");

    const { countries, okCountryData, okCountry, okCountryFlag, handleCount, score, setScore, questionsCount, setQuestionsCount } = props;

    const capital = okCountryData?.capital[0];

    // targeting submit button for disabling / enabling 
    let submit = useRef(null);

    const [answer, setAnswer] = useState("");

    const [showHint, setShowHint] = useState(false);

    const [seenHint, setSeenHint] = useState(false);

    const handleClick = (e) => {
        setAnswer(e.target.value);
        // enable "submit" button when one option is selected
        submit.current.removeAttribute("disabled");
        submit.current.classList.add("enabled");
    }

    function handleAnswer(e){
        e.preventDefault();
        // if (locked === false){
            let isCorrect = false;
            if(answer === okCountry){
                isCorrect = true;
                handleCount(isCorrect, seenHint);
            } else {
                handleCount(isCorrect);
            }
            // disable "submit" button until one option is selected
            submit.current.setAttribute("disabled", ""); 
            submit.current.classList.remove("enabled");
        // }
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
        <div className="container main-wrapper">
        {questionsCount < 5 ? 
            <>
            <div className="row data-wrapper">
                <h1 className="quiz-title">Flags Quiz</h1>
                <p className="questions-count">Round {questionsCount} of 5</p>
                <p className="hint-warning">Click the <span className="highlight">info button</span> below the flag to see the <span className="highlight">country's capital</span>. But if you guess correct, your will <span className="highlight">only score 0.5 points</span> for this flag.</p>
            </div>
            <div className="row quiz-wrapper">
                <div className="col-6 question-wrapper">
                    <div className="flag-wrapper"> 
                        <img 
                            src={okCountryFlag} 
                            className="flag"
                        />
                    </div>
                    <button
                        className="btn hint-btn" 
                        onClick={toggleHint}>
                        <i className="bi bi-info-circle-fill"></i>
                        <p style={{ display: showHint ? "inline" : "none" }}>Its capital is {capital}</p>
                    </button>
                </div>
                
                <form className="col-6 form-wrapper"
                    onSubmit={handleAnswer}>
                    <div className="options-wrapper">
                    {countries?.map((country, index) => (
                        <div 
                            // assigning a unique key, unique even for every time the component re-renders (next question) prevents inputs being checked by default cause they share key with previous ones
                            key={`${index} + "-" + ${country}`}
                            className="form-check option">
                            <input 
                                className="form-check-input" type="radio" 
                                name="answer" 
                                // id="exampleRadios1" 
                                value={country}
                                onChange={handleClick}     
                            />
                            <label 
                                className="form-check-label" 
                                htmlFor={country}>
                                {country}
                            </label>
                        </div>
                    ))}
                    </div>
                    <button 
                        className="btn submit-btn"
                        disabled
                        ref={submit}>
                        Answer
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