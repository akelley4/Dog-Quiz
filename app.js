const correctAnswers = ['B', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    //store value of answers in an array
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers, cycles thru each answer to see if it matches index
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
});
    // window object (global object); Scrolls to the top this one in particular take an x and y coordinate
    scrollTo(0,0);
    // this removes the d-none class to reveal score at top of page
    result.classList.remove('d-none');

    // score increasing, setting interval 
    let output = 0;
    const timer = setInterval(() => {
    // show result on page, this grabs span nested in p tag
    result.querySelector('span').textContent = `${output}%`; 
    if(output === score){
        clearInterval(timer);
    }   else {
        output ++;
    }

    },10);

});