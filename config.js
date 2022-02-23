// this environment variable gets handed to us by heroku if we use the postgres add-on

export const cloudName = process.env.CLOUD_NAME;
export const apiKey = process.env.API_KEY;
export const apiSecret = process.env.API_SECRET;

export const connectionString =
  process.env.Environment === "test"
    ? process.env.DATABASE_URL_TEST
    : process.env.DATABASE_URL;
