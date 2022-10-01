import "react-app-polyfill/stable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { TransactionForm } from "./pages/TransactionPage";

export default function App() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { exact: true, path: "/", element: React.createElement(LoginPage, null) }),
      React.createElement(Route, { path: "/login", element: React.createElement(LoginPage, null) }),
      React.createElement(Route, { path: "/transaction", element: React.createElement(TransactionForm, null) })
    )
  );
}