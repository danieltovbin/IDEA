import { cookieParser } from "cookie-parser";
import UserModel from "./usersModel";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import nodemailer from 'nodemailer';
const { SECRET_KEY } = process.env;
const saltRounds = 10;

export const register = async (req, res) => {
  try {
    const { userName, password, email, name } = req.body;
    if (!userName || !password || !email || !name)
      throw new Error("not get all user information");
    const hash = await bcrypt.hash(password, saltRounds);
    const user = new UserModel({ userName, password: hash, email, name });
    const userDB = await user.save();
    if (userDB) res.send({ userDB, ok: true });
    else res.send({ ok: false });
  } catch (error) {
    res
      .status(400)
      .send({ error: "Bad Request", message: error.message, ok: false });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    console.log(userName, password);
    if (!userName || !password) throw new Error("not get all user information");
    const userDB = await UserModel.findOne({ userName });
    if (!userDB) throw new Error("user not found");
    const { password: hash } = userDB;
    if (!hash) throw new Error("some of details are incorrect");
    const match: boolean = await bcrypt.compare(password, hash);
    if (!match) throw new Error("password are incorrect");
    const cookie = {
      userId: userDB._id,
    };
    const token = jwt.encode(cookie, SECRET_KEY);
    res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 3 });
    res.send({ userDB, ok: true, userToken: token });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Bad Request", message: error.message });
  }
};

export const getUserByToken = async (req, res) => {
  try {
    const token = req.cookies.user;
    if (!token) throw new Error("no token");
    const cookie = jwt.decode(token, SECRET_KEY);
    const userDB = await UserModel.findById(cookie);
    if (!userDB) throw new Error("no user");
    res.send({ user: userDB });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Bad Request", message: error.message });
  }
};

export const checkIsAdmin = async (req, res) => {
  try {
    const { userToken } = req.body;
    if (!userToken) throw new Error("no token");
    const { userId } = jwt.decode(userToken, SECRET_KEY);
    const userDB = await UserModel.findById(userId);
    if (!userDB) throw new Error("no user");

    if (userDB.role === "admin") {
      res.send({ isAdmin: true });
    } else res.send({ isAdmin: false });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Bad Request", message: error.message });
  }
};

export const checkIsAdminMW = async (req, res, next) => {
  try {
    console.log(req.params.userToken);

    const { userToken } = req.body;
    if (!userToken) throw new Error("no token");
    const { userId } = jwt.decode(userToken, SECRET_KEY);
    const userDB = await UserModel.findById(userId);
    if (!userDB) throw new Error("no user");

    if (userDB.role === "admin") {
      // res.send({ isAdmin: true });
      next();
    } else res.send({ isAdmin: false, error: "not authorized" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Bad Request", message: error.message });
  }
};



const PORT = process.env.PORT || 3000;



export const sendEmail = async(req,res)=>{
  try {
    const {fullName, email, phone, subject, message} = req.body;

    const transporter = nodemailer.createTransport({
      port: 3000,
      service: 'gmail',
      auth: {
        user: 'idearuthdaniel@gmail.com',
        pass: 'cbwk cqra yzag pnyh',
      }
    });

    const mailOptions = {
      from: 'idearuthdaniel@gmail.com',
      to: 'idearuthdaniel@gmail.com',
      subject: subject,
      html: `<p style="color:red;">Name: ${fullName}<br>Email: ${email}</br>Phone: ${phone}<br>Message: ${message}</br></p>`
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    res.send({ok: true, message: 'Email sent successfully'})
    
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({error: 'Internal Server Error',message:error.message})
  }
}


