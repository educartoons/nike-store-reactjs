import { BrowserRouter, Route, Routes } from "react-router";
import { SnackbarProvider } from "notistack";
import LookUpPage from "./pages/LookUpPage";
import StorePage from "./pages/StorePage";
import JoinUsPage from "./pages/JoinUsPage";
import ChallengePage from "./pages/ChallengePage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StorePage />} />
          <Route path="/lookup" element={<LookUpPage />} />
          <Route path="/join" element={<JoinUsPage />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}
