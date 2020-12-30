const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Schema.Types.Mixed,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    subCategory: {
      type: [String],
      require: false,
    },
    price: {
      type: Number,
    },
    old_price: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    brands: {
      type: [String],
    },
    variants: [
      {
        color: {
          type: String,
        },
      },
    ],
    _vendorID: {
      type: Schema.Types.ObjectId,
      ref: 'Seller',
      required: true,
    },
    images: {
      type: [String],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    rating: {
      type: Number,
      Default: 0,
    },
    size: {
      type: [String],
    },
    QualityType: {
      type: String,
      default: 'New',
    },
    termsAndConditions: {
      type: String,
    },
    highlights: {
      type: [String],
      default: null,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    favCount: {
      type: Number,
      default: 0,
    },
    isOutOfStock: {
      type: Boolean,
      default: false,
    },
    quantity: {
      type: Number,
      default: 50,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);
/**
 * @typedef Product
 */
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
