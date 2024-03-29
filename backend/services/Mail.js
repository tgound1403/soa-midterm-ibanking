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

const sendEmail = async ({ to, content }) => {
    try {
        const info = await transporter.sendMail({
            from: MAIL_SETTINGS.auth.user,
            to: to,
            subject: 'iBanking sending email',
            html: `
            <div
                class="container"
                style="max-width: 90%; margin: auto; padding-top: 20px"
            >
                <h2>Welcome to iBanking app</h2>
                <h4>You are officially In ✔</h4>
                <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${content}</h1>
                <div style="background-color: #f6f6f6; border-radius: 8px; padding: 2rem;">
                    <p>This email was automatically send by iBanking app, please do not response this email</p>
                    <p>This is not official email of iBanking app. If you need to contact us, please do it through <strong>trinhcamminh25112002@gmail.com</strong></p>
                </div>
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
