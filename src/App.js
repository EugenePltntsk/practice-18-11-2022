import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import React, { Suspense, lazy } from "react";
const AccordionPage = lazy(() =>
  import("./pages/AccordionItem/AccordionPage.jsx")
);
const FAQPage = lazy(() => import("./pages/FAQ/FAQPage"));
const ProductsPage = lazy(() => import("./pages/Products/ProductsPage"));
const ProductPage = lazy(() => import("./pages/Product/ProductPage"));

export function App() {
  return (
    <>
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
}
