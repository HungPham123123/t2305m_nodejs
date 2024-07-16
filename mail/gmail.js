const nodeMailer = require("nodemailer");

const config = {
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "markuspham20@gmail.com",
        pass: 'vyjg qwyl wtbx prlh'
    }
}

const transport = nodeMailer.createTransport(config);