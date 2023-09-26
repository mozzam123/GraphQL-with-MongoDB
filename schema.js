export const typeDefs = `#graphql
type Review{
  _id: ID!,
  listing_url: String,
  name: String,
  summary: String,
  space: String,
  description: String,
  neighborhood_overview: String,
  notes: String,
  transit: String,
  access: String,
  interaction: String,
  house_rules: String,
  property_type: String,
  room_type: String,
  bed_type: String,
  minimum_nights: String,
  maximum_nights: String,
  cancellation_policy:String,
}
type Query {
    reviews: [Review!]
    review(id:ID!): Review
    deleteReview(id:ID!): Review

}
`;
