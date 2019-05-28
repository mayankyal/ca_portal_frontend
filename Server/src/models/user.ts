// usr -> fbid, email, name, fbtoken, totalpoints, id, refcode
// post-> postid, maxshare, curshares, expiretime, id
import mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    fbUserId: { type: String, required: true },
    fbToken: { type: String, require: false},
    totalPoints: { type: Number, require: true, default: 0 },
    refCode: { type: String, required: false },
    postShared: [{ postid: { type: mongoose.Schema.Types.ObjectId, ref: 'post' }, 
                   shares: { type: Number, default: 0 }}],
    tasksCompleted: [{ taskid: { type: mongoose.Schema.Types.ObjectId, ref: 'task' },
                       completed: { type: Boolean, default: 0 }}]
});

userSchema.set('toJSON', { getters: true, virtuals: true });
export = mongoose.model('user', userSchema);
