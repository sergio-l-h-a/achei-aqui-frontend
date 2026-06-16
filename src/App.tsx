import { Routes, Route } from "react-router-dom";
import LeftSection from "./components/LeftSection";
import HomePage from "./pages/HomePage";
import ComoFunciona from "./pages/ComoFunciona";
import LoginPage from "./pages/LoginPage";
import CategoriaPage from "./pages/CategoriaPage";
import RegisterPage from "./pages/RegisterPage";
import BusinessListPage from "./pages/BusinessListPage";
import BusinessDetailPage from "./pages/BusinessDetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../src/styles.css";

function App() {
  

  return (
    <div className="app">
      <Header />
      <main className="app-content">
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categoria" element={<LeftSection />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/categoria/:id" element={<CategoriaPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/negocios" element={<BusinessListPage />} />
          <Route path="/negocios/:id" element={<BusinessDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
