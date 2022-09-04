// To start using a schema, rename this file to schema.ts
import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  messages: defineTable({
    author: s.string(),
    body: s.string(),
  }),
  counters: defineTable({
    name: s.string(),
    counter: s.number(),
  }),

  freeItems: defineTable({
    nameOfItem: s.string(),
    latitude: s.number(),
    longitude: s.number(),
    status: s.string()
  })

});