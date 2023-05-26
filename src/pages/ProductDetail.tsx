import { useEffect, useState } from "react";
import { productService } from "../services/productService";
import { Product } from "../models/Product";

function ProductDetail() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    productService.getData().then((res) => {
      console.log(res);
      setProduct(res);
    });
  };

  return (
    <>
      <ul>
        {product &&
          product.map((item) => (
            <li key={item.id} style={{ cursor: "pointer" }}>
              {item.id} - {item.name} - {item.unitPrice} - {item.unitsInStock} -{" "}
              {item.quantityPerUnit} - {item.categoryId}
            </li>
          ))}
      </ul>
    </>
  );
}

export default ProductDetail;
