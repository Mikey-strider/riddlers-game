console.log('app is running');

const navigationEle = document.getElementById('navigation');
const spielEle = document.getElementById('spiel-section');
const startBtnEle = document.getElementById('start-game');
const investigateBtnEle = document.getElementById('investigate');
const rulesSectionEle = document.getElementById('rules-section');
const villainIvyEle = document.getElementById('villain-ivy');
const ivyQuestionEle = document.getElementById('quizz-question');

startBtnEle.addEventListener('click', () => {
  // console.log('I have been clicked')
  villainIvyEle.removeAttribute('hidden');
  villainIvyEle.style.color = '#ff035b';
  villainIvyEle.style.backgroundColor = '#142e13';
  ivyQuestionEle.innerText = 'I have made a hybrid plant that is part carnivorous and part poisonous. Based on the Name of this plant (Deadly Son), what are the plants that went into making the hybrid? The answers will be in latin. Good luck!'
  
});




// console.log(rulesSectionEle);
// console.log(spielEle);