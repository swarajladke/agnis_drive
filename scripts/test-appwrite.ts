import { Client, Databases } from "node-appwrite";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: ".env.local" });

const config = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    project: process.env.NEXT_PUBLIC_APPWRITE_PROJECT,
    database: process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
    collection: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION,
    key: process.env.NEXT_APPWRITE_KEY,
};

console.log("--- Appwrite Config Check ---");
console.log("Endpoint:", config.endpoint);
console.log("Project ID:", config.project);
console.log("Database ID:", config.database);
console.log("Collection ID:", config.collection);
console.log("API Key length:", config.key ? config.key.length : 0);

if (!config.endpoint || !config.project || !config.key) {
    console.error("Missing core config variables!");
    process.exit(1);
}

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.project)
    .setKey(config.key);

const databases = new Databases(client);

async function testConnection() {
    try {
        console.log("\nAttempting to list documents...");
        const result = await databases.listDocuments(config.database!, config.collection!);
        console.log("Success! Total documents in users collection:", result.total);
    } catch (error: any) {
        console.error("\nConnection Failed!");
        console.error("Error Code:", error.code);
        console.error("Error Type:", error.type);
        console.error("Error Message:", error.message);

        if (error.code === 401) {
            console.error("\nSUGGESTION: Your API Key is likely invalid or missing scopes (databases.read, collections.read, documents.read).");
        }
    }
}

testConnection();
