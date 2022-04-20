window.addEventListener('load', () => {
const submitBtn = document.getElementById("submitto");
const postsubmit = document.getElementById('post-submit');
const presubmit = document.getElementById('pre-submit');

submitBtn.addEventListener('click', () => {
    postsubmit.classList.remove('hide')
    presubmit.classList.add('hide')
});





})


