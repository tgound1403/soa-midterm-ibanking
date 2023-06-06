const optGenerator = require('otp-generator');

const generateOTP = () => {
    const OTP = optGenerator.generate(10, { upperCaseAlphabets: true, specialChars: false });
    return OTP;
};

module.exports = {
    generateOTP,
};
