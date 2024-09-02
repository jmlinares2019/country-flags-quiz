import { useEffect, useState } from "react";

function Quiz(props){
    console.log("Component rendered");
    console.log(props.okCountryData)

    const { countries, okCountryData, okCountry, okCountryFlag, handleCount, questionsCount } = props;

    const capital = okCountryData?.capital[0];

    const [answer, setAnswer] = useState("");

    const [showCapital, setShowCapital] = useState(false);

    const handleClick = (e) => {
        setAnswer(e.target.value);
        console.log(answer)
    }

    function handleAnswer(e){
        e.preventDefault();
        let isCorrect = false;
        if(answer === okCountry){
            isCorrect = true;
            handleCount(isCorrect);
        } else {
            handleCount(isCorrect);
        } 
    }

    // showing / hiding capital
    function toggleCapital(){
        setShowCapital(showCapital => !showCapital)
    }

    // hide capital when new question
    useEffect(() => {
        setShowCapital(false)
    }, [questionsCount])

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 flag-wrapper">
                    <img 
                        src={okCountryFlag} 
                        className="w-100"
                    />
                    <button onClick={toggleCapital}>
                        <i className="bi bi-info-circle-fill"></i>
                        <p style={{ display: showCapital ? "inline" : "none" }}>Its capital is {capital}</p>
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
        </div>      
    )
}

export default Quiz