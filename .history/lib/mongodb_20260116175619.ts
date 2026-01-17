import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getDB(dbName:string) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(dbName);
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    throw e;
  }
}

export async function getCollection(collectionName:string) {
  const db = await getDB('cog_tracker_db');
  if (db) return db.collection(collectionName);
 
  return null;
}