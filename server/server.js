const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.options('*', cors());
app.post('/api/send-email', async (req, res) => {
    console.log("HERE");
  const { name, email, message } = req.body;

  try {
    sgMail.setApiKey('SG.7bUDhXH9QCqjeStsPT5gRw.RoP-5udit|20LemWuws3JJeYCqmGN6mSRW9go2Xd-14');

    const msg = {
      to: 'yousseffouff@gmail.com', // Replace with your email address
      from: email, // Set the "reply-to" header to the visitor's email address
      subject: 'New Inquiry from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    sgResp = await sgMail.send(msg);
    console.log(sgResp);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error sending@ email:', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
