import { query } from "./_generated/server";

export default query(async ({ db }) => {
  return await db.table("freeItems").filter(q => q.eq(q.field("status"), "free")).collect();
});
