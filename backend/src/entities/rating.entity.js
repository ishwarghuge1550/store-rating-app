const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Rating",
  columns: {
    id: { primary: true, type: "int", generated: true },
    // ... other columns
  },
  relations: {
    user: {
      target: "User", // Use string reference
      type: "many-to-one",
    },
    store: {
      target: "Store", // Use string reference
      type: "many-to-one",
    },
  },
});
