import express, {
  json,
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
const app: Application = express();
app.use(express.json());
const PORT = 5000;

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_AjI7mdKwCf1n@ep-lively-butterfly-azxjk2lx.c-3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});
console.log(pool);

    //   id SERIAL PRIMARY KEY,
    //   name VARCHAR(255),
    //   email VARCHAR(255) UNIQUE NOT NULL,
    //   password VARCHAR(255) NOT NULL,
    //   age INT,
    //   is_Active BOOLEAN DEFAULT true,
      
    //   created_at TIMESTAMP DEFAULT NOW(),
    //   updated_at TIMESTAMP DEFAULT NOW()

const initDB = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        age INT,
        is_Active BOOLEAN DEFAULT true,

        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        );
        `);
  } catch (error) {
    console.log(error);
  }
};

initDB();
app.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json({ id: 101, author: "Araf", designation: "Jr. SWE" });
});

app.listen(PORT, () => {
  console.log(`Here is your new Express Server running on ${PORT} port!!!`);
  console.log(`Here is your new Express Server running on ${PORT} port!!!`);
  console.log(`Here is your new Express Server running on ${PORT} port!!!`);
  console.log(`Here is your new Express Server running on ${PORT} port!!!`);
});
