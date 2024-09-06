import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';

function App() {

  const [countriesData, setCountriesData] = useState([]);

  const [points, setPoints] = useState(0);

  const [questionsCount, setQuestionsCount] = useState(1);

  // Using try / catch
  /* useEffect(() => {
    async function fetchCountries() {
      const url = 'https://restcountries.com/v3.1/all'
      // const API_KEY = 'DNhGCawYAHc4F78tMxypWtDq2ybahAuW32a8pD3O'
      // const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${API_KEY}`
      // const url = 'https://api.imgflip.com/get_memes'
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        console.log(apiData)
        setCountriesData(apiData)
        // console.log(countriesData)
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchCountries()
  }, []) */

  // Using .then
  useEffect(function(){
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
      .then(res => res.json())
      .then(apiData => setCountriesData(apiData))
  }, [])

  // Create array with wrong options
  const wrongIndexes = [];
  const allOptions = [];
  while(wrongIndexes.length < 3){
      let randomNumber = Math.floor(Math.random() * 250);
      // checking if randomNumber already exists
      if(wrongIndexes.indexOf(randomNumber) === -1)
          // keep all wrongIndexes to be able to check if they already exist
          wrongIndexes.push(randomNumber)
          allOptions.push(countriesData[randomNumber]?.name.common);
  }

  // Select right country (correct answer) 
  const randomIndex = Math.floor(Math.random() * 250);
  // The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined
  const okCountryData = countriesData[randomIndex];
  const okCountry = countriesData[randomIndex]?.name.common;
  const okCountryFlag = countriesData[randomIndex]?.flags.png;

  // Push right country to wrong options array
  allOptions.push(okCountry)

  // shuffle options (so that correct is not always last)
  const shuffle = (options) => {
    for(let i = options.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]]
    }
    return options;
  }

  const shuffledCountries = shuffle(allOptions);

  // Manage points and questions count
  function pointsCount(isCorrect, seenHint){
    if(isCorrect){
      if(seenHint){
        setPoints(points => points + 0.5)
      } else {
        setPoints(points => points + 1)
      }
      setQuestionsCount(questionsCount => questionsCount + 1)
    } else {
      setQuestionsCount(questionsCount => questionsCount + 1)
    }

  }

  return (
    <div className="App">
      <div className="container main-container">
        <BrowserRouter>
          <Routes>
            <Route 
              index 
              element={<Home />} />
            <Route 
              path="quiz" 
              element={<Quiz 
                          countries={shuffledCountries}
                          okCountryData={okCountryData}
                          okCountry={okCountry}
                          okCountryFlag={okCountryFlag}
                          handleCount={pointsCount}
                          score={points}
                          setScore={setPoints}
                          questionsCount={questionsCount}
                          setQuestionsCount={setQuestionsCount}
                        />}         
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
