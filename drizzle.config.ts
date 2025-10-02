import { defineConfig } from "drizzle-kit";
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default defineConfig({
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    dialect: 'postgresql',
    schema: './src/server/db/schema.ts',
    out: './src/server/db/migrations'
})