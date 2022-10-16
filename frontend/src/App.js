import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { TransactionForm } from "./pages/transaction";
import { HistoryPage } from "./pages/history";
import { useAuthContext } from "./hooks/useAuthContext";

export default function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to={"transaction"} /> : <LoginPage />}
        />
        <Route
          path="/transaction"
          element={user ? <TransactionForm /> : <Navigate to={"/"} />}
        />
        <Route
          path="/history"
          element={user ? <HistoryPage /> : <Navigate to={"/history"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
