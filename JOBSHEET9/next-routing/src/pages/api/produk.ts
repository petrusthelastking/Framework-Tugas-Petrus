// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveProducts, addProduct, deleteProduct } from "../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    if (req.method === "GET") {
      const data = await retrieveProducts("products");
      res.status(200).json({ status: true, status_code: 200, data });
    } else if (req.method === "POST") {
      const { name, price, category, image } = req.body;
      const id = await addProduct("products", {
        name,
        price: Number(price),
        category,
        image,
      });
      res.status(201).json({ status: true, status_code: 201, data: { id } });
    } else if (req.method === "DELETE") {
      const { id } = req.body;
      await deleteProduct("products", id);
      res.status(200).json({ status: true, status_code: 200, data: { id } });
    } else {
      res.status(405).json({ status: false, status_code: 405, data: "Method not allowed" });
    }
  } catch (error: any) {
    console.error("Firebase error:", error.message);
    res.status(500).json({ status: false, status_code: 500, data: error.message });
  }
}

