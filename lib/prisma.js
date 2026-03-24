// lib/prisma.js
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = process.env.DATABASE_URL; // Pooled URL from Supabase

// Setup the PostgreSQL pool using the 'pg' library
const pool = new pg.Pool({ connectionString });

// Create the Prisma adapter
const adapter = new PrismaPg(pool);

/**
 * We use 'globalThis' to prevent multiple instances of Prisma Client 
 * from being created during Next.js Hot Module Replacement (HMR) 
 * in development mode.
 */
const globalForPrisma = globalThis;

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}