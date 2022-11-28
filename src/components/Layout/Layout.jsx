import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <div>
          <h2>Welcome to our webpage</h2>
        </div>
      </header>

      <aside>
        <NavLink to="/accordion">Accordion</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/products">Products</NavLink>
      </aside>

      <main>
        <Outlet />
      </main>
    </>
  );
}
