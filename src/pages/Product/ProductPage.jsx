import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsOfProduct } from "../../helpers/API";

export default function Product() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    productId &&
      getDetailsOfProduct(productId).then((data) => {
        setProduct(data);
      });
  }, [productId]);

  return (
    <div>
      <p>Black Friday Sale</p>
      <p>{product?.name}</p>
      <p>{product?.description}</p>
      <p>Old Price: {product?.price}</p>
      <p>New Price: {product?.price * 0.87}</p>
    </div>
  );
}
