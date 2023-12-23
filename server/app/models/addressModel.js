const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressModel = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    houseNo: {
      type: String,
      required: true,
    },
    addressStreet: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    landMaker: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address",addressModel)

module.exports = Address