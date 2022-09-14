const throttle = require('lodash.throttle');

const formData = {
	email: ' ',
	message: ' ',
};
const  refs = {
	form: document.querySelector('.feedback-form'),
	textarea: document.querySelector('.feedback-form textarea'),
	input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input', throttle(onFormInput, 1000));

populationMessageOutput();



function onSubmitForm (e) {
e.preventDefault();

e.currentTarget.reset();

localStorage.removeItem('feedback-form-state');
};

function onFormInput (e) {
e.preventDefault();

formData[e.target.name] = e.target.value;


const formDataJson = JSON.stringify(formData)
localStorage.setItem('feedback-form-state', formDataJson);
};

function populationMessageOutput() {
const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

if(savedMessage) {
	const {email, message} = savedMessage;

refs.input.value = email;
refs.textarea.value = message;

};
};


