const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Store",
  columns: {
    id: { primary: true, type: "int", generated: true },
    // ... other columns
  },
  relations: {
    owner: {
      target: "User", // Use string reference
      type: "many-to-one",
    },
    ratings: {
      target: "Rating", // Use string reference
      type: "one-to-many",
    },
  },
});
