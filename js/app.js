console.log('app is running');

const navigationEle = document.getElementById('navigation');
const spielEle = document.getElementById('spiel-section');
const startBtnEle = document.getElementById('start-game');
const investigateBtnEle = document.getElementById('investigate');
const rulesSectionEle = document.getElementById('rules-section');
const villainIvyEle = document.getElementById('villain-ivy');
const plantImageEle = document.getElementById('deadly-son');
const selectAnswer = document.getElementById('ivy-quizz-selection');
const submitAnswerEle = document.getElementById('quizz-submit');
const nextQuestionButton = document.getElementById('next-question');
const firstWordEle = document.getElementById('first-word');
const secondWordEle = document.getElementById('second-word');

const ivyQuestionEle = document.getElementById('quizz-question');

const levelOneQuestions = [
  {
    questions: 'What year was the character Poison Ivy created?',
    answers: [1964, 1965, 1966, 1967, 1968],
  },
  {
    questions: 'What was the name of her flowershop before she became the villainess Poison Ivy?',
    answers: ['Pequeno Jardim', 'Fleurish', 'Bleuet Coquelicot', 'Champ Libre Fleuriste', 'Bauldlaire'],
  },
  {
    questions: 'I have made a hybrid plant that is part carnivorous and part poisonous. Based on the Name of this plant (Deadly Son), what are the plants that went into making the hybrid? The answers will be in latin. Good luck!',
    answers: ['Actaea pachypoda & Genlisea pulchella',
      'Phaseolus lunatus & Heliamphora elongata',
      'Rheum rhaponticum & Genlisea pygmaea',
      'Atropa Belladonna & Drosera Binata',
      'Solanum lycopersicum & Drosera banksii',]
  },
];


let nextQuestion = 0;


function questionnaire() {
  ivyQuestionEle.innerText = levelOneQuestions[nextQuestion].questions;
  nextQuestion = nextQuestion + 1;
}

let nextAnswer = 0;

function answering() {
  levelOneQuestions[nextAnswer].answers.forEach((answer) => {

    const answerEle = document.createElement('li');
    answerEle.innerText = answer;
    selectAnswer.appendChild(answerEle);
    console.log(nextAnswer)

  });
  nextAnswer = nextAnswer + 1;

}


startBtnEle.addEventListener('click', () => {
  villainIvyEle.removeAttribute('hidden');
  villainIvyEle.style.color = '#ff4183';
  questionnaire();
  answering()
  villainIvyEle.style.backgroundColor = '#040f00';
  ivyQuestionEle.style.backgroundColor = '#040f00'
  plantImageEle.removeAttribute('hidden');
  selectAnswer.removeAttribute('hidden');

});



nextQuestionButton.addEventListener('click', () => {
  questionnaire();
  answering();

});



selectAnswer.addEventListener('click', (e) => {

  if (e.target.innerText === '1966') {
    const correctChoice = document.createElement('h4');
    correctChoice.innerText = 'You have chosen correctly!';
    villainIvyEle.appendChild(correctChoice);
    selectAnswer.innerText = '';
    nextQuestionButton.removeAttribute('hidden');


  } else if (e.target.innerText === 'Bauldlaire') {
    const correctChoice = document.createElement('h4');
    correctChoice.innerText = 'You have chosen correctly!';
    villainIvyEle.appendChild(correctChoice);
    selectAnswer.innerText = '';


  } else if (e.target.innerText === 'Atropa Belladonna & Drosera Binata') {
    const correctChoice = document.createElement('h4');
    correctChoice.innerText = 'You have chosen correctly! merit sky ride';
    villainIvyEle.appendChild(correctChoice);
    submitAnswerEle.removeAttribute('hidden');
    plantImageEle.removeAttribute('hidden');
    firstWordEle.removeAttribute('hidden');
    secondWordEle.removeAttribute('hidden');
    selectAnswer.innerText = '';



  } else {
    const wrongChoice = document.createElement('h4');
    wrongChoice.innerText = 'You have chosen wrong, better luck next time!';
    villainIvyEle.appendChild(wrongChoice);
  }
})

function anagramSolved() {
  if (firstWordEle.value === 'Mikey' && secondWordEle.value === 'Strider') {
    console.log('you have beaten the game. Here is a thank you from the creator');
  } else {
    console.log('That is not it. Maybe next time.')
  }
}


submitAnswerEle.addEventListener('click', anagramSolved);




