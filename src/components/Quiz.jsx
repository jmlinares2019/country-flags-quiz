import { useState } from "react";

function Quiz(props){
    console.log("Component rendered");

    const { countries, okCountry, okCountryFlag, handleCount } = props;

    const [answer, setAnswer] = useState("");

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

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 flag-wrapper">
                    <img 
                        src={okCountryFlag} 
                        className="w-100"
                    />
                </div>
                <form 
                    className="col-6 form-wrapper"
                    onSubmit={handleAnswer}>
                    {countries?.map((country, index) => (
                        <div 
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