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
    try {
      client = await MongoClient.connect(
        "mongodb+srv://andihoerudin:andihoerudin@cluster0.dx4sn.mongodb.net/my-site?retryWrites=true&w=majority",
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
