import { mutation } from './_generated/server'

export default mutation(
  async ({ db }, itemID, newStatus) => {
    const item = await db
      .table('freeItems')
      .filter((q) => q.eq(q.field('_id'), itemID))
      .first()

      if (item === null) {
        console.log(`Error. There is no item with id ${itemID}.`)
      } else {
        item.status = newStatus
        db.replace(item._id, item)
        console.log(`Status changed of ${item._id} of counter is now ${item.status}.`)
      }
      
  }
)