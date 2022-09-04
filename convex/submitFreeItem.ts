import { mutation } from './_generated/server'

export default mutation(
  async ({ db }, nameOfItem: string, latitude: number, longitude: number) => {
      const row = {nameOfItem, latitude, longitude, status: "free"}
      db.insert("freeItems", row);
  }
)
