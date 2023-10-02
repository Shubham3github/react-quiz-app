export const shuffleAnswers = (question) => {
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers
    ]

    return unshuffledAnswers.map((unshuffledAnswer) => ({
        sort:Math.random(),
        value:unshuffledAnswer
    }))
    .sort((a,b) => a.sort - b.sort)
    .map((a)=> a.value);
    }


export const normalizeQuestions = (backendQuestions) => {
    return backendQuestions.map((backendQuestion)=> {
     const  incorrectAnswers = backendQuestion.incorrect_answers
     .map((incorrectAnswer)=> decodeURIComponent(incorrectAnswer.replace(/&amp;/g, '').replace(/&#039;/g, '"'))
    );
     return {
       correctAnswer: decodeURIComponent(backendQuestion.correct_answer.replace(/&amp;/g, '').replace(/&#039;/g, '"')),
       question: decodeURIComponent(backendQuestion.question.replace(/&quot;/g, '"').replace(/&#039;/g, '"')),
       incorrectAnswers
     }   
    })
}    