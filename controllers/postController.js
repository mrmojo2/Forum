import { StatusCodes } from "http-status-codes"
import Post from "../models/Post.js"

const getAllPosts = async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json({ posts, length: posts.length })
}

const getSinglePost = async (req, res) => {
    res.send('get single post')
}

const createPost = async (req, res) => {
    const { title, body, tags } = req.body
    const post = await Post.create({ title, body, postedBy: req.user.userId, tags })
    res.status(StatusCodes.CREATED).json({ msg: 'post created', post })
}

const updatePost = async (req, res) => {
    res.send('update post')
}

const deletePost = async (req, res) => {
    res.send('delete post')
}


export { getAllPosts, getSinglePost, createPost, updatePost, deletePost }