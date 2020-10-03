// Main JS

"use strict";

const contactform = document.querySelector('#contact-form');
const email_input = document.querySelector('#email');
const message_input = document.querySelector('#message');
const mail_report = document.querySelector('#mail-report');

contactform.addEventListener('submit', (event) => {
	event.preventDefault();
	processMessage(email_input.value, message_input.value);
});

const processMessage = async (email, msg) => {
	if (msg.length < 10) {
		customMailAlert('Message too small', {
			bgcolor: 'red'
		});
		return undefined;
	}
	if (checkMessageValidity(msg)) {
		customMailAlert('Insidious element detected in mail. Send me a mail with your E-mail App to discuss about it.', {
			bgcolor: 'red'
		});
	}
};

const customMailAlert = (msg, options) => {
	mail_report.innerHTML = msg;
	mail_report.style.display = "block";
	if (options !== undefined) {
		mail_report.style.backgroundColor = options.bgcolor;
	}
	setTimeout(() => {
		mail_report.style.display = "none";
	}, 4000);
};

const checkMessageValidity = (text) => {
	const pattern = /(\<\w*)((\s\/\>)|(.*\<\/\w*\>))/gm;
	return pattern.test(text);
}