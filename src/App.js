import "react-app-polyfill/stable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/index.js";
import { TransactionForm } from "./pages/TransactionPage";
import React from "react";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/transaction" element={<TransactionForm />} />
      </Routes>
    </BrowserRouter>
  );
}
