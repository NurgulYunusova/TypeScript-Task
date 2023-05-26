import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { productService } from "../services/productService";
import { useNavigate } from "react-router-dom";

function Products() {
  const [productList, setProductList] = useState<Product[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    productService.getData().then((res) => {
      setProductList(res);
    });
  };

  const getDetail = (id: number) => {
    productService.getMoreDetail(id).then((res) => {
      console.log(res);
    });
    navigate("/productDetail");
  };

  return (
    <>
      <ul>
        {productList &&
          productList.map((item) => (
            <li
              key={item.id}
              onClick={() => getDetail(item.id)}
              style={{ cursor: "pointer" }}
            >
              {item.name} - {item.unitPrice} - {item.unitsInStock}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Products;
