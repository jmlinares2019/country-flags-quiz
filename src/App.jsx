import { useState, useEffect } from 'react';
// import Navbar from './components/Navbar'
import Quiz from './components/Quiz'
import Results from './components/Results'

function App() {

  const [countriesData, setCountriesData] = useState([]);

  const [points, setPoints] = useState(0);

  const [questionsCount, setQuestionsCount] = useState(0);

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
  const okCountry = countriesData[randomIndex]?.name.common;
  const okCountryFlag = countriesData[randomIndex]?.flags.png;

  // Push right country to wrong options array
  allOptions.push(okCountry)

  // Manage points and questions count
  function pointsCount(isCorrect){
    if(isCorrect){
      setPoints(points => points + 1)
      console.log(points)
      setQuestionsCount(questionsCount => questionsCount + 1)
      console.log(questionsCount)
    } else {
      console.log(points)
      setQuestionsCount(questionsCount => questionsCount + 1)
      console.log(questionsCount)
    }
  }

  return (
    <div className="App">

      {questionsCount < 5 ? 
        <Quiz 
          countries={allOptions}
          okCountry={okCountry}
          okCountryFlag={okCountryFlag}
          handleCount={pointsCount}
        /> 
      :
        <Results result={points}/>
      }
    </div>
  )

}

export default App
