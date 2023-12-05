import "./App.scss";

import { Routes, Route } from "react-router-dom";

import LoginPage from "./routes/login";
import PrivatePage from "./routes/privatePage";
import PublicPage from "./routes/publicPage";
import AuthProvider from "./auth/AuthProvider";
import RequireAuth from "./auth/RequireAuth";

import Layout from "./Layouts/Layout";

function App() {
  return (
    <>
      <div className="grid"></div>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <PrivatePage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
