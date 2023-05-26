import axios from "axios";
import { Product } from "../models/Product";

export const productService = {
  getData: async (): Promise<Product[]> => {
    let products: Product[] = [];

    await axios.get("https://northwind.vercel.app/api/products").then((res) => {
      products = res.data;
    });

    return products;
  },
  getMoreDetail: async (id: number): Promise<Product> => {
    const response: Product = {
      id: 0,
      name: "",
      unitPrice: 0,
      unitsInStock: 0,
      quantityPerUnit: "",
      categoryId: 0,
    };

    await axios
      .get(`https://northwind.vercel.app/api/products/${id}`)
      .then((res) => {
        response.id = res.data.id;
        response.name = res.data.name;
        response.unitPrice = res.data.unitPrice;
        response.unitsInStock = res.data.unitsInStock;
        response.quantityPerUnit = res.data.quantityPerUnit;
        response.categoryId = res.data.categoryId;
      });

    return response;
  },
};
