import HttpError from "../error/HttpError.js"
import User from "../models/User.js"
const getProfile = async (req, res) => {
    const { profileId } = req.params
    const profile = await User.findOne({ _id: profileId })
    if (!profile) {
        throw new HttpError('not found', 404)
    }
    res.status(200).json({ profile })
}

export { getProfile }