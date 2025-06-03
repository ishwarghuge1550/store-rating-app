const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  columns: {
    id: { primary: true, type: "int", generated: true },
    // ... other columns
  },
  relations: {
    stores: {
      target: "Store", // Use string reference
      type: "one-to-many",
    },
    ratings: {
      target: "Rating", // Use string reference
      type: "one-to-many",
    },
  },
});
