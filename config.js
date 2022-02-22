// this environment variable gets handed to us by heroku if we use the postgres add-on
export const connectionString = process.env.DATABASE_URL;
export const cloudName = process.env.CLOUD_NAME;
export const apiKey = process.env.API_KEY;
export const apiSecret = process.env.API_SECRET;
