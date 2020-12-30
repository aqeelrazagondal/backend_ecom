const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const { toJSON, paginate } = require('./plugins');
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Category
 */
const Category = mongoose.model('Categories', categorySchema);

module.exports = Category;
