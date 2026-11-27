import {
  pgTable,
  text,
  varchar,
  timestamp,
  uuid,
  date,
  integer,
} from "drizzle-orm/pg-core";
import { v7 as uuidv7 } from "uuid";

export const settings = pgTable("settings", {
  key: varchar("key", { length: 255 }).primaryKey(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const explorations = pgTable("explorations", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const experiences = pgTable("experiences", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  company_name: varchar("company_name", { length: 255 }).notNull(),
  company_abbreviation: varchar("company_abbreviation", {
    length: 255,
  }).notNull(),
  role_name: varchar("role_name", { length: 255 }).notNull(),
  start_date: date("start_date", { mode: "string" }).notNull(),
  end_date: date("end_date", { mode: "string" }),
  work_summary: text("work_summary"),
  display_order: integer("display_order")
    .generatedByDefaultAsIdentity()
    .notNull()
    .unique(),
});
