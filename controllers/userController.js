import HttpError from "../error/HttpError.js"
import User from "../models/User.js"
import checkPermission from "../utils/checkPermissions.js"
import { attachCookieToResponse } from "../utils/jwt.js"
import { StatusCodes } from "http-status-codes"

import { v2 as cloudinary } from "cloudinary"
import fs from 'fs'


const getProfile = async (req, res) => {
    const { profileId } = req.params
    const profile = await User.findOne({ _id: profileId })
    if (!profile) {
        throw new HttpError('not found', 404)
    }
    res.status(200).json({ profile })
}

const updateProfile = async (req, res) => {
    const { profileId } = req.params
    const img = req.files?.img

    const checkUser = await User.findOne({ _id: profileId })
    if (!checkUser) {
        res.status(404).json({ msg: 'not found' })
    }

    checkPermission(req.user, checkUser._id)

    let uploadedImage
    if (img) {
        if (!img.mimetype.startsWith('image')) {
            throw new HttpError('invalid file type', StatusCodes.BAD_REQUEST)
        }
        if (img.size > 10000000) {
            throw new HttpError('file too big', StatusCodes.BAD_REQUEST)
        }
        uploadedImage = await cloudinary.uploader.upload(req.files.img.tempFilePath, {
            use_filename: true,
            filename_override: req.files.img.name,
            folder: 'IOE_Forum/profile_pics'
        })
        fs.unlink(req.files.img.tempFilePath, (error) => {
            if (error) throw error
        })

        //delete the previous profile pic from cloudinary
        let public_id = checkUser.profile_pic.split('/').slice(7).join('/').split('.').slice(0, -1).join('.')
        if (!(public_id === 'IOE_Forum/profile_pics/protikbruh_uvqm30')) {
            try {
                await cloudinary.uploader.destroy(public_id)
            } catch (error) {
                console.log(error)
            }
        }
    }

    //remember to prevent hacker from changing roles!
    const updateObject = {}
    req.body?.name && (updateObject['name'] = req.body.name)
    req.body?.bio && (updateObject['bio'] = req.body.bio)
    req.body?.faculty && (updateObject['faculty'] = req.body.faculty)
    uploadedImage && (updateObject['profile_pic'] = uploadedImage.secure_url)
    console.log(updateObject)
    const user = await User.findOneAndUpdate({ _id: req.user.userId }, updateObject, {
        runValidators: true,
        new: true,
    })

    const tokenUser = { name: user.name, role: user.role, userId: user._id, profile_pic: user.profile_pic }
    attachCookieToResponse({ res, user: tokenUser })

    res.status(StatusCodes.OK).json({ tokenUser, user })
}

export { getProfile, updateProfile }