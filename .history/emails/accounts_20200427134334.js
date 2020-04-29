const sgMail = require('@sendgrid/mail')

const sendgridApikey = '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'

sgMail.setApiKey(sendgridApikey)

sgMail.send({
  to: 'anubhavya246@gmail.com',
  from: 'anubhavya246@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
})