import { useEffect, useLayoutEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Dashboard, Orders, Profile, PromptEditor, Login } from "../../pages";
import ProtectedRoute from "./ProtectedRoutes";
function ScrollToTop() {
  const { pathname } = useLocation();

  // useEffect is used to scroll to the top when the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useLayoutEffect is used to scroll to the top when the component mounts
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const RouterNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/prompts" element={<PromptEditor />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/log-in" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};
export default RouterNavigation;
