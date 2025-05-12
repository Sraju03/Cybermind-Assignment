const { MongoClient, ObjectId } = require("mongodb");
const setupRemoteDb = async () => {
  const uri =
    "mongodb+srv://rajusekar2004:0S5Did2D0nrerKAG@cluster0.dsizia2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);
  let db;

  try {
    await client.connect();
    db = client.db("JobPortel");

    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((col) => col.name);

    if (!collectionNames.includes("Jobs")) {
      await db.createCollection("Jobs");
    }

    return db;
  } catch (err) {
    return { error: err, message: "Couldn't connect to MongoDB" };
  }
};

setupRemoteDb();
async function connectToReplicaSet() {
  const db = await setupRemoteDb();
  console.log(db);

  if (!db) {
    return handleError(err, "Couldn't connect to MongoDB");
  }

  async function loadCollection(collectionName) {
    try {
      const collection = db.collection(collectionName);
      const result = await collection.find({}).toArray();

      if (result.length > 0) {
        return {
          flag: true,
          message: "Data loaded successfully",
          data: result,
        };
      } else {
        return { flag: false, message: "No data found" };
      }
    } catch (e) {
      return { flag: false, message: e.message };
    }
  }

  async function insertDocument(collectionName, doc) {
    try {
      const collection = db.collection(collectionName);
      const result = await collection.insertOne(doc);

      if (result.acknowledged) {
        return {
          flag: true,
          message: "Document inserted successfully",
        };
      } else {
        return { flag: false, message: "Couldn't insert document" };
      }
    } catch (e) {
      console.log(e);

      return { flag: false, message: e.message };
    }
  }

  return {
    loadCollection,
    insertDocument,
  };
}

module.exports = connectToReplicaSet;
