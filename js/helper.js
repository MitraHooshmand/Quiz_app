const reformingTheData = function (dataArray) {
  const newArrayOfAnswers = dataArray.map((item) => {
    const newQuestionObj = { question: item.question };
    const answers = [...item.incorrect_answers];
    const indexOfCorrectAnswer = Math.floor(Math.random() * 4);
    answers.splice(indexOfCorrectAnswer, 0, item.correct_answer);
    newQuestionObj.answers = answers;
    newQuestionObj.correct_answer = indexOfCorrectAnswer;
    return newQuestionObj;
  });
  return newArrayOfAnswers;
};

export default reformingTheData;
