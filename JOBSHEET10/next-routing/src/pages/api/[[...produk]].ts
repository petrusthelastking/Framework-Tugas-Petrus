import type { NextApiRequest, NextApiResponse } from "next";
import {
  retrieveDataById,
  retrieveProducts,
  addProduct,
  deleteProduct,
} from "../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const segments = req.query.produk;
    const route = Array.isArray(segments) ? segments[0] : undefined;
    const id = Array.isArray(segments) ? segments[1] : undefined;

    if (!route || route !== "produk") {
      return res
        .status(404)
        .json({ status: false, status_code: 404, data: "Route not found" });
    }

    if (req.method === "GET") {
      if (id) {
        const data = await retrieveDataById("products", id);
        if (!data) {
          return res
            .status(404)
            .json({ status: false, status_code: 404, data: null });
        }

        return res.status(200).json({ status: true, status_code: 200, data });
      }

      const data = await retrieveProducts("products");
      return res.status(200).json({ status: true, status_code: 200, data });
    }

    if (req.method === "POST") {
      const { name, price, category, image } = req.body;
      const newId = await addProduct("products", {
        name,
        price: Number(price),
        category,
        image,
      });
      return res
        .status(201)
        .json({ status: true, status_code: 201, data: { id: newId } });
    }

    if (req.method === "DELETE") {
      const targetId = id ?? req.body?.id;
      if (!targetId) {
        return res
          .status(400)
          .json({ status: false, status_code: 400, data: "id is required" });
      }

      await deleteProduct("products", targetId);
      return res
        .status(200)
        .json({ status: true, status_code: 200, data: { id: targetId } });
    }

    return res
      .status(405)
      .json({ status: false, status_code: 405, data: "Method not allowed" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return res
      .status(500)
      .json({ status: false, status_code: 500, data: message });
  }
}