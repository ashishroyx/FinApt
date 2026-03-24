import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // This MUST use DIRECT_URL (Port 5432) for migrations to work
    url: env("DIRECT_URL"), 
  },
});