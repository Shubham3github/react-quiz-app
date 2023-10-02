import { useContext } from "react";
import Answer from "./Answer"
import { QuizContext } from "../contexts/quiz";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestions = quizState.questions[quizState.currentQuestionIndex];
    return (
        <div>
            <div className="question">{currentQuestions.question}</div>
            <div className="answers">
            {quizState.answers.map((answer , index)=>
            <Answer answerText={answer} 
                    key={index} 
                    currentAnswer={quizState.currentAnswer} 
                    correctAnswer={currentQuestions.correctAnswer}
                    index={index} 
                    onSelectAnswer={(answerText)=> dispatch({type:'SELECT_ANSWER' , payload:answerText})}/>
            )}    
            </div>
            
        </div>
    )
}

export default Question