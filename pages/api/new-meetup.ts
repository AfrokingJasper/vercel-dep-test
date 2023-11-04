// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type Data = {
  name?: string;
  message?: string;
  data?: {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URL);

    const db = client.db();

    const meetupsCollection = db.collection("meetup-events");
    const result = await meetupsCollection.insertOne({ data });

    console.log(result);

    client.close();
    res.status(200).json({ message: "Event Added successfully", data: data });
    return;
  } else {
    res.status(422).json({ message: "Invalid Request" });
    return;
  }
}
