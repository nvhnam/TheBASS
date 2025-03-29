/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import Spinner from "./components/Spinner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import Collections from "./pages/Collections";
import CollectionsName from "./pages/CollectionsName";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Post from "./components/Post";
import WritePost from "./components/WritePost";

function Layout({ isLoading }) {
  return (
    <div className="w-full h-full min-h-screen relative flex flex-col">
      <Navbar />
      {/* <AnimatePresence mode="wait">{isLoading && <Spinner />}</AnimatePresence> */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      > */}
      <Outlet />
      {/* </motion.div> */}
      <Footer />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AuthContextProvider setIsLoading={setIsLoading}>
      <main>
        <Routes>
          <Route
            element={
              <Layout isLoading={isLoading} setIsLoading={setIsLoading} />
            }
          >
            <Route index element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={<Home setIsLoading={setIsLoading} />}
            />
            <Route
              path="/blog/:blogId"
              element={<Post setIsLoading={setIsLoading} />}
            />
            <Route
              path="/blog"
              element={<Blog setIsLoading={setIsLoading} />}
            />
            <Route
              path="/blog/write"
              element={<WritePost setIsLoading={setIsLoading} />}
            />
            <Route
              path="/collections"
              element={<Collections setIsLoading={setIsLoading} />}
            />
            <Route
              path="/collections/:collectionsName"
              element={<CollectionsName setIsLoading={setIsLoading} />}
            />
            <Route
              path="/collections/:collectionsName/products/:productsId"
              element={<Product setIsLoading={setIsLoading} />}
            />
          </Route>
          <Route
            path="/login"
            element={<Login setIsLoading={setIsLoading} />}
          />
          <Route
            path="/register"
            element={<Register setIsLoading={setIsLoading} />}
          />
          {/* <Route
            path="/register/verify"
            element={<Verify setIsLoading={setIsLoading} />}
          /> */}
        </Routes>
      </main>
    </AuthContextProvider>
  );
}

export default App;
