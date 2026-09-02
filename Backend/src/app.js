const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express();
// veryfirst use cors middleware
// app.use(cors());

app.use(cors({
  origin: [
    "http://localhost:5174",
    "https://social-media-post-app-mu.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options("*", cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
})

app.post('/create-post', upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image file provided" });
    }

    const result = await uploadFile(req.file.buffer, req.file.originalname);

    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption
    });

    res.status(201).json({ message: "Post created", post });
  } catch (error) {
    if (error instanceof multer.MulterError) {
      return res.status(400).json({ message: error.message });
    }
    console.log(error);
    res.status(500).json({ message: "Error creating post" });
  }
})


app.get("/posts", async (req,res) => {
  const posts = await postModel.find()

  return res.status(200).json({
    message: "posts fetched successfully",
    posts
  })
})
module.exports = app;
