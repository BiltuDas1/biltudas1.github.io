import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../db/schema";
import { getSecret } from "./infisical.server";

let dbPromise: Promise<ReturnType<typeof drizzle>> | undefined;

export function getDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const databaseUrl = await getSecret("POSTGRES_URI");

      const pool = new Pool({
        connectionString: databaseUrl,
        max: 3,
      });

      return drizzle(pool, { schema });
    })().catch((error) => {
      dbPromise = undefined;
      throw error;
    });
  }

  return dbPromise;
}
