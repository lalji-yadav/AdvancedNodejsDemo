const sgMail = require('@sendgrid/mail')

const sendgridApikey = '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'

sgMail.setApiKey(sendgridApikey)

sgMail.send({
  to: 'anubhavya246@gmail.com',
  from: 'anubhavya246@gmail.com',
  subject: 'my first test app ',
  text: 'it working ',
 // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
})
