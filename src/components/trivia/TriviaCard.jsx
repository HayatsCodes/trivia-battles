// eslint-disable-next-line react/prop-types
const TriviaCard = ({triviaQuestion, triviaAnswer1,triviaAnswer2, triviaAnswer3, triviaAnswer4, triviaAnswer5}) => {

    return (
        <div className="trivia-card">
            <h3 className="trivia-card-question">{triviaQuestion}</h3>
            <ul className="trivia-card-answers">
                <li className="trivia-card-answer">{triviaAnswer1}</li>
                <li className="trivia-card-answer">{triviaAnswer2}</li>
                <li className="trivia-card-answer">{triviaAnswer3}</li>
                <li className="trivia-card-answer">{triviaAnswer4}</li>
                <li className="trivia-card-answer">{triviaAnswer5}</li>
            </ul>
        </div>
    )
}

export default TriviaCard