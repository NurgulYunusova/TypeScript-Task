import { useEffect, useState } from "react";
import { productService } from "../services/productService";
import { Product } from "../models/Product";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = () => {
    productService.getMoreDetail(Number(id)).then((res) => {
      console.log("Product detail", res);
      setProduct(res);
    });
  };

  return (
    <>
      <ul>
        {product && (
          <li key={product.id} style={{ cursor: "pointer" }}>
            {product.id} - {product.name} - {product.unitPrice} -{" "}
            {product.unitsInStock} - {product.quantityPerUnit} -{" "}
            {product.categoryId}
          </li>
        )}
      </ul>
    </>
  );
}

export default ProductDetail;
