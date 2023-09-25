import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  listing_url: {
    type: String,
  },
  name: {
    type: String,
  },
  summary: {
    type: String,
  },
  space: {
    type: String,
  },
  description: {
    type: String,
  },
  neighborhood_overview: {
    type: String,
  },
  notes: {
    type: String,
  },
  transit: {
    type: String,
  },
  access: {
    type: String,
  },
  interaction: {
    type: String,
  },
  house_rules: {
    type: String,
  },
  property_type: {
    type: String,
  },
  room_type: {
    type: String,
  },
  bed_type: {
    type: String,
  },
  minimum_nights: {
    type: String,
  },
  maximum_nights: {
    type: String,
  },
  cancellation_policy: {
    type: String,
  },
});

const ReviewModel = mongoose.model("Review", reviewSchema);

export default ReviewModel;
