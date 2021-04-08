import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
      return res.status(422).json({
        message: "Invalid input",
      });
    }
    const newMessage = {
      email,
      name,
      message,
    };
    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.dx4sn.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    try {
      client = await MongoClient.connect(connectionString,
        { useUnifiedTopology: true }
      );
    } catch (error) {
      return res.status(500).json({
        message: "Could not connect to database",
      });
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      return res.status(500).json({
        message: "Storing message failed",
      });
    }

    console.log(newMessage);
    client.close();
    return res.status(201).json({
      message: "SuccesFully stored message",
      body: newMessage,
    });
  }
};

export default handler;
