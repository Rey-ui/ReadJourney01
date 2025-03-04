import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
//import RecommendedPage from "./pages/RecommendedPage";
import { useDispatch, useSelector } from "react-redux";
import { selectUserIsRefreshing } from "./redux/auth/selectors";
import { apiRefreshUser } from "./redux/auth/operations";
import ReadingPage from "./pages/ReadingPage";
//import LibraryPage from "./pages/LibraryPage";
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
// const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RecommendedPage = lazy(() => import("./pages/RecommendedPage"));
const LibraryPage = lazy(() => import("./pages/LibraryPage"));
// const ContactsPage = lazy(() => import("./pages/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserIsRefreshing);
  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div className="Wrapper">
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login" component={<Layout />} />
            }
          >
            <Route
              path="/recommended"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<RecommendedPage />}
                />
              }
            />
            <Route
              path="/library"
              element={
                <PrivateRoute redirectTo="/login" component={<LibraryPage />} />
              }
            />
            <Route
              path="/reading"
              element={
                <PrivateRoute redirectTo="/login" component={<ReadingPage />} />
              }
            />
          </Route>
          {/* <Route path="/" element={<Navigate to="/register" replace />} /> */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<LoginPage />}
              />
            }
          />
          {/* <Route path="/" element={<Layout />} /> */}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
