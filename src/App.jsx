import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupModal from "./modal/SignupModal";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="auth" element={<AuthPage />} />
    <Route path="signup" element={<SignupModal/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
