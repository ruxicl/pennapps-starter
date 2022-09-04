import { mutation } from './_generated/server'

export default mutation(
  async ({ db }, nameOfItem: string, address: string, longitude: number) => {
      const row = {nameOfItem, address, longitude, status: "free"}
      db.insert("freeItems", row);
  }
)
