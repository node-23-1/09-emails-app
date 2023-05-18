const catchError = require('../utils/catchError');
const sendEmail = require('../utils/sendEmail');

const send = catchError(async(req, res) => {
    await sendEmail({
        to: "andres.mendoza@academlo.com",
        subject: "Email desde node",
        html: `
            <h1>Hola desde node con HTML :D</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem, officiis ad provident nemo aperiam? Impedit quaerat quidem quasi quo inventore temporibus? Sunt dolor doloribus, est vel sed amet aliquid!
            </p>
        `
    })
    return res.json({message: "Email sent"});
})

const contact = catchError(async(req, res) => {
    const { name, email, phone, message} = req.body;
    await sendEmail({
        to: "andres.mendoza@academlo.com",
        subject: "Mensaje del portafolio!",
        html: `
            <h1>${name} te escribió desde tu portafolio!</h1>
            <p>${message}</p>
            <ul>
                <li><b>Email </b> ${email}</li>
                <li><b>Phone </b> ${phone}</li>
            </ul>
        `
    });
    return res.json({ message: "Email sent" });
})

module.exports = {
    send,
    contact
}