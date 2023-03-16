import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please provide title'],
        maxLength: 200,
    },
    body: {
        type: String,
        required: [true, 'please provide body'],
    },
    upvotes: {
        type: Number,
        default: 0,
    },
    comments: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [String],
        default: undefined,
        required: [true, 'please provide some tags']
    },
    postedBy: {
        id: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'please provide user']
        },
        name: {
            type: String,
        }
    },
    poster: {
        type: String,
    }
}, { timestamps: true })

export default mongoose.model('Post', PostSchema)