//config email
require('dotenv').config();
const MAIL_SETTINGS = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
};

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(MAIL_SETTINGS);

const sendEmail = async ({to, OTP}) => {
    try {
        const info = await transporter.sendMail({
            from: MAIL_SETTINGS.auth.user,
            to: to,
            subject: 'Send email by NodeJS',
            html: `
            <div
                class="container"
                style="max-width: 90%; margin: auto; padding-top: 20px"
            >
                <h2>Welcome to the club.</h2>
                <h4>You are officially In ✔</h4>
                <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
                <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${OTP}</h1>
                <p style="margin-top:50px;">If you do not request for verification please do not respond to the mail. You can in turn un subscribe to the mailing list and we will never bother you again.</p>
            </div>
            `,
        });
        console.log('mail send successfully');
        return info;
    } catch (error) {
        console.log(`something wrong while sending email: ${error}`);
        return false;
    }
};

module.exports = {
    sendEmail,
};
