const sgMail = require('@sendgrid/mail')

const sendgridApikey = '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'

sgMail.setApiKey(sendgridApikey)



// sgMail.send({
//   to: 'laljiyadav04121995@gmail.com',
//   from: 'laljiyadav04121995@gmail.com',
//   subject: 'my first test app ',
//   text: 'it working ',
//  // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'anubhavya246@gmail.com',
        subject: 'Thanks for joining',
        text: 'welcome to our app , ${name}. rgh6'
    })

}

module.exports = {
    sendWelcomeEmail
}
