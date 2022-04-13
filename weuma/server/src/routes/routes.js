const { Router } = require("express");
const router = Router();

//Import bcrypt
const bcrypt = require("bcrypt");

//Import user model
const User = require("../models/user");
const Ticket = require("../models/ticket");
const Message = require("../models/message");
const Faq = require("../models/faq");
const Shortcut = require("../models/Shortcut");

//Import JSON Web Token
const jwt = require("jsonwebtoken");

//Import Multer for file uploading
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../server/src/public/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage}).single('file')


/**
 * -----------------------
 *          Routes
 * -----------------------
 */

//https://www.youtube.com/watch?v=wIOpe8S2Mk8

router.post("/upload",(req, res) => {
    upload(req, res, (err) => {
        if (err){
            console.log(JSON.stringify(err));
            res.status(400).send("fail saving image");
        } else {
            const filename = req.file.filename;
            res.status(200).json({ filename });
    }
    })
})

router.post("/signup", async (req, res) => {
    try {
        const { name, studentId, phone, email, password, image } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: name,
            studentId : studentId,
            phone: phone,
            email: email,
            password: hash,
            role: 'user',
            image: image
        })
        await newUser.save();

        const token = jwt.sign({_id: newUser._id}, "SecretKey");

        res.status(200).json({ token });
    } catch (e) {
        console.log("Request error: " + e);
    }
})

router.post("/save-message", async (req, res) => {
    try {
        const { message, author, room, image } = req.body;
        const newMessage = new Message({
            message: message,
            author: author,
            room: room,
            image: image
        })
        await newMessage.save();

        res.status(200).json({ message: "Message saved" });
    } catch (e) {
        console.log("Request error: " + e);
    }
})

router.get("/get-messages", async (req, res) => {
    const messages = await Message.find({}).sort({createdAt: 1});

    res.status(200).json({ messages });
})

router.post("/delete-message", async (req, res) => {
    try {
        const { id } = req.body;
        await Message.deleteOne({_id: id});

        res.status(200).json({ message: "Message deleted" });
    } catch (e) {
        console.log("Request error: " + e);
    }
})

router.post("/get-user", verifyToken, async (req, res) => {
    try {
        const userId = req.userId;
        const { profileId } = req.body;


        const user = await User.findById({_id: profileId}, {password: 0});

        if(userId == profileId){
            res.status(200).json({user, owner: true});
        }else{
            res.status(200).json({user, owner: false});
        }

    } catch (error) {
        console.log("Request error: " + error);
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email});

        if(!user) return res.status(401).send("The email is not associated with any account in existence");

        const validPass = await bcrypt.compare(password, user.password);

        if(!validPass) return res.status(401).send("Wrong password");

        //Create token after successful login

        const token = jwt.sign({ _id: user._id }, "SecretKey");

        return res.status(200).json({ token });

    } catch (e) {
        console.log("Request error: " + e);
    }
})

router.post("/answer-ticket", async (req, res) => {
    try {
        
        const { ticketId, email, response, adminId } = req.body;

        const ticket = await Ticket.findOneAndUpdate({ _id: ticketId }, { $set: { response: response, adminId: adminId } }, { new: true });

        if(!ticket) return res.status(401).send("Ticket not found");

        return res.status(200).json({ ticket });

    } catch (error) {
        console.log(error)
    }
})

router.post("/get-solved-tickets", async (req, res) => {
    try {
        
        const { profileId } = req.body;

        const solvedTickets = await Ticket.find({ adminId: profileId }).sort({createdAt: -1});

        if(!solvedTickets) return res.status(401).send("No tickets found");

        return res.status(200).json({ solvedTickets });

    } catch (error) {
        console.log(error)
    }
})

router.post("/delete-faq", async (req, res) => {
    try {
        
        const { id } = req.body;
        await Faq.findByIdAndDelete({ _id: id });

        return res.status(200).json({ message: "FAQ deleted" });

    } catch (error) {
        console.log(error)
    }
})

router.post("/delete-ticket", async (req, res) => {
    try {
        
        const { id } = req.body;
        await Ticket.findByIdAndDelete({ _id: id });

        return res.status(200).json({ message: "Ticket deleted" });

    } catch (error) {
        console.log(error)
    }
})

router.post("/submit-shortcut", async (req, res) => {
    try {
        const {message, category, adminId} = req.body;
        console.log(category.toLowerCase())
        const newShortcut = new Shortcut({
            message: message,
            category: category.toLowerCase(),
            adminId: adminId
        })

        await newShortcut.save();

        return res.status(200).json(newShortcut);

    } catch (error) {
        console.log(error)
    }
})

router.post("/get-shortcuts", async (req, res) => {
    try {
        
        const { id } = req.body;
        const shortcuts = await Shortcut.find({ adminId: id }).sort({createdAt: -1});

        return res.status(200).json({ shortcuts });

    } catch (error) {
        console.log(error)
    }
})

router.post("/get-faq", async (req, res) => {
    try {
        
        const { category } = req.body;

        const faq = await Faq.find({ category: category }).sort({createdAt: -1});

        if(!faq) return res.status(401).json({ message: "No faq found" });

        return res.status(201).json({ faq });

    } catch (error) {
        console.log(error)
    }
})

router.post("/faq-submit", async (req, res) => {
    try {
        
        const { question, answer, category } = req.body;

        const newFaq = new Faq({
            title: question,
            response: answer,
            category: category
        })

        await newFaq.save();

        res.status(201).json("FAQ submitted");
    } catch (error) {
        console.log(error)
    }
})


router.post("/ticket-submit", async (req, res) => {
    try {
        const { email, category, title, message, adminId, response } = req.body;

        const newTicket = new Ticket({
            email: email,
            category: category.toLowerCase(),
            title: title,
            message: message,
            adminId: adminId,
            response: response
        })

        await newTicket.save();

        res.status(200).json({ message: "Ticket submitted successfully" });

    } catch (error) {
        console.log("Request error: " + error);
    }
})

router.post("/register", verifyToken, async (req, res) => {
    const {userId} = req;
    const user = await User.findOne({ _id: userId}, { _id: 1, name: 1, image: 1, role: 1});

    res.status(200).json(user);
})

router.get("/admins", async (req, res) => {
    const admins = await User.find({ role: "admin"}, { _id: 1, name: 1, image: 1, role: 1 });

    res.status(200).json({"admins": admins});
})

router.get("/users", async (req, res) => {
    const users = await User.find({}, { _id: 1, name: 1, image: 1, role: 1 });

    res.status(200).json({"users": users});
})

router.get("/tickets", async (req, res) => {
    const tickets = await Ticket.find({adminId : {$eq : ''}}, { _id: 1, email: 1, category: 1, title: 1, message: 1, senderId: 1});

    res.status(200).json({"tickets": tickets});
})

function verifyToken(req, res, next){

    //Check if the request has the "Bearer" header
    if(!req.headers.authorization){
        return res.status(401).send("Unauthorized request");
    }

    //Check if the token is not null
    const token = req.headers.authorization.split(" ")[1];
    if(token == "null"){
        return res.status(401).send("Unauthorized request");
    }

    //Verify token and get the info that we introduced into it
    const payload = jwt.verify(token, "SecretKey");

    //Introduce the payload into the request body
    req.userId = payload._id;

    next();
}

module.exports = router;