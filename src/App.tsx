import { BrowserRouter, Route, Routes } from "react-router";
import { SnackbarProvider } from "notistack";
import LookUpPage from "./pages/LookUpPage";
import StorePage from "./pages/StorePage";
import { UserProvider } from "./context/user-context";
import JoinUsPage from "./pages/JoinUsPage";
import ChallengePage from "./pages/ChallengePage";

export default function App() {
  return (
    <SnackbarProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StorePage />} />
            <Route path="/lookup" element={<LookUpPage />} />
            <Route path="/join" element={<JoinUsPage />} />
            <Route path="/challenge" element={<ChallengePage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </SnackbarProvider>
  );
}
