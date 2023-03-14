import { StatusCodes } from "http-status-codes"
import Post from "../models/Post.js"
import HttpError from '../error/HttpError.js'
import mongoose from "mongoose"

const getAllPosts = async (req, res) => {
    let queryObject = {
        ...req.query
    }
    console.log(req.query)
    const posts = await Post.find(queryObject).select('-body -postedBy -createdAt -updatedAt')
    res.status(200).json({ posts, length: posts.length })
}

const getSinglePost = async (req, res) => {
    const { id: postId } = req.params
    const post = await Post.findOne({ _id: postId })
    if (!post) {
        throw new HttpError('NotFound', 404)
    }
    res.status(200).json({ post })
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