import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env.stage.prod' });

export default () => ({
  DB_URI: process.env.DB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  STAGE: process.env.STAGE,
});
