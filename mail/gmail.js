<<<<<<< HEAD
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
=======
const nodemailer = require("nodemailer");
const config = {
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587, // NO_SSL // 465 (SSL)
    auth: {
        user: "hoatq4@fpt.edu.vn",
        pass: 'wncnqyscslmgnrga'
    }
}
const transport = nodemailer.createTransport(config);
>>>>>>> 05b383b24d31bbe18bc9f124b81d35d4ee96eff1
module.exports = transport;