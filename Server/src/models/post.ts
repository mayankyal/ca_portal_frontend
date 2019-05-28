import mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    fbId: { type: String, required: true },
    expTime: { type: Date, required: true },
    maxShare: { type: Number, required: false }
});

postSchema.set('toJSON', { getters: true, virtuals: true });
export = mongoose.model('post', postSchema);
