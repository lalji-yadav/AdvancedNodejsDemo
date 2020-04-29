const sgMail = require('@sendgrid/mail')

const sendgridApikey = 'SG.HcAuw0FFTGaXzpMdKixx6w.pXeN1SxXxjKHRHnew5SO5FXQFSrvvJUGdMdZHxner6Q'

sgMail.setApiKey(sendgridApikey)

sgMail.send({
  to: 'anubhavya246@gmail.com',
  from: 'anubhavya246@gmail.com',
  subject: 'my first test app ',
  text: 'it working ',
 // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
})
