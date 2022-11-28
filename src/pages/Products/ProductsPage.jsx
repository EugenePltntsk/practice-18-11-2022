import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modalActiveSlice";
import { getProductsThunk } from "../../redux/productsOperations";
import { deleteProduct } from "../../redux/productsSlice";
import FormProductsAdd from "../../components/FormProductsAdd/FormProductsAdd";
import Modal from "../../components/Modal/Modal";
import { Lishka, List, StyledLink } from "./ProductsPage.styled";

export default function Products() {
  const [product, setProduct] = useState(null);
  const products = useSelector((state) => state.products.products);
  const [id, setId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const setModalActiveFoo = (e) => {
    dispatch(openModal());

    setId(e.currentTarget.id);
  };

  const funcForDel = (id) => {
    setDeleteId(id);

    dispatch(deleteProduct(id));
  };

  return (
    <>
      <Modal product={product} />
      <FormProductsAdd />
      <List>
        {products.map((product) => (
          <Lishka key={product.id + product.name}>
            {product.name}
            <p>{product.description}</p>
            <p>{product.price}</p>
            {Math.random() < 0.5 ? (
              <button id={product.id} onClick={setModalActiveFoo}>
                Details
              </button>
            ) : (
              <StyledLink to={`/products/${product.id}`}>Details</StyledLink>
            )}
            <button
              disabled={deleteId === product.id}
              onClick={() => funcForDel(product.id)}
            >
              Delete
            </button>
          </Lishka>
        ))}
      </List>
    </>
  );
}
