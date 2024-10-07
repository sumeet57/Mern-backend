import mongoose, {Schema} from 'mongoose';
import User from './user.model';

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    thumbnail: {
        type: String,
        trim: true
    },
    duration: {
        type: String,
        trim: true
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: User,
    },
},{
    timestamps: true
});



export const Video = mongoose.model('Video', videoSchema);

