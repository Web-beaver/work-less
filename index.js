const exp = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const buildPath = path.join(__dirname,"build");
const app = exp();
app.use(cors());
app.use(bodyParser.json());
app.use(exp.static(buildPath));



app.get("*",(req, res, next) => {
    console.log(req);
    res.sendFile(path.join(buildPath,"index.html"));
  });

app.post("/sendemail", async(req, res) => {
    const {email,message} = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "aroraishan51@gmail.com",
            pass: "grvk tsfg ixbo mooi"
        }
    });
    await transporter.sendMail({
        from: "aroraishan51@gmail.com",
        to: "aroraishan51@gmail.com",
        subject: "From Portfolio Website",
        text: `From email ${email} with message\n ${message}`
    })
    .then((data)=>{
        console.log("Work done");
        res.sendStatus(201);
    })
    .catch((err)=>{
        console.log("Work not done");
        console.log(err);
        res.sendStatus(501);
    }
    );

    
})

app.listen(8000,()=>{
    console.log("Listening to Port 8000....");
});