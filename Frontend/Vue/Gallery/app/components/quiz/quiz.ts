import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

let quiz = {
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
let userResponses = {};

@Component({
    name: 'quiz',
    template: require('./quiz.html'),

    data: function () {
                         return {
                                 quiz: quiz,
                                 userResponses: Array(quiz.questions.length).fill(false),
                                }
                        }
})

export class Quiz extends Vue {
    questionIndex: number = 0;
    userResponses: {
        filter;
    };
    Next(){
        this.questionIndex++;
    }
    Prev(){
        this.questionIndex--;
    }
    Score(){
        return this.userResponses.filter(function(val) { return val==true }).length;
    }
}