import {
  mysqlTable,
  bigint,
  varchar,
  datetime,
  text,
} from "drizzle-orm/mysql-core"

export const users = mysqlTable("users", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).unique(),
  password: text("password"),
  updated_at: datetime("updated_at").$defaultFn(() => new Date()),
  created_at: datetime("created_at").$defaultFn(() => new Date()),
})
