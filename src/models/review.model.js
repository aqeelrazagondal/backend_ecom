const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const { toJSON, paginate } = require('./plugins');
const commentSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
    },
    _userID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Comment
 */
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
