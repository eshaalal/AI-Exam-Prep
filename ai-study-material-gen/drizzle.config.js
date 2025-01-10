import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:"postgresql://neondb_owner:Wayx2U1vLQmk@ep-frosty-hill-a1z5x17a.ap-southeast-1.aws.neon.tech/AI-Study-Material-Gen?sslmode=require",
  }
});
