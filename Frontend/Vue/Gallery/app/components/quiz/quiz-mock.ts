export const QuizMock = {
    title: 'My quiz',
        questions: [
          {
            text: "Question 1",
            responses: [
              {id: 1, text: 'Wrong, too bad.', correct: '1'}, 
              {id: 2, text: 'Wrong, not so bad.', correct: '2'}, 
              {id: 3, text: 'Right!', correct: true}
            ]
          }, {
            text: "Question 2",
            responses: [
              {id: 4, text: 'Right answer', correct: true}, 
              {id: 5, text: 'Wrong answer', correct: '5'}, 
              {id: 6, text: 'Wrong, not so bad.', correct: '6'}
            ]
          }, {
            text: "Question 3",
            responses: [
              {id: 7, text: 'Right answer', correct: true}, 
              {id: 8, text: 'Wrong answer', correct: '8'}, 
              {id: 9, text: 'Wrong, not so bad.', correct: '9'} 
            ]
          }  
        ]
};