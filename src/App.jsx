import { useState, useEffect } from 'react'
import './App.css'
import TriviaCard from './components/trivia/TriviaCard'
import axios from 'axios'

const App = () => {
  const [questions, setQuestions] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState(null)

  const shuffleAnswers = (answers) => { 
    return answers.sort(() => Math.random() - 0.5)
  }

 useEffect(() => {
  axios.get('https://the-trivia-api.com/v2/questions/?limit=20&categories=sport_and_leisure,history,arts_and_literature,society_and_culture,science,geography,food_and_drink,general_knowledge')
    .then(response => {
      const shuffledAnswers = shuffleAnswers([...response.data[0].incorrectAnswers, response.data[0].correctAnswer, "I don't know"])
      setQuestions(response.data)
      setQuestion(response.data[0].question.text)
      setAnswers(shuffledAnswers)
      setCorrectAnswer(response.data[0].correctAnswer)
    }).catch(error => {
      console.error(error)
    })
 }, [])


const handleNextTrivia = () => {
  const index = questionIndex + 1
  const shuffledAnswers = shuffleAnswers([...questions[index].incorrectAnswers, questions[index].correctAnswer, "I don't know"])
  setQuestion(questions[index].question.text)
  setCorrectAnswer(questions[index].correctAnswer)
  setQuestionIndex(index)
  setAnswers(shuffledAnswers)
}
  return (
    <div>
     { questions.length > 1 
     ? <>
     <TriviaCard 
        triviaQuestion={question}
        triviaAnswer1={answers[0]}
        triviaAnswer2={answers[1]}
        triviaAnswer3={answers[2]}
        triviaAnswer4={answers[3]}
        triviaAnswer5={answers[4]}
      />
      <p>{`Correct Answer: ${correctAnswer}`}</p>
      <button className="trivia-btn" onClick={handleNextTrivia}>Next</button>
      </>
      : 'Loading...'
    }
    </div>
  )
}

export default App
