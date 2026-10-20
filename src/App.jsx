import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contato from "./pages/Contato.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/contato" replace />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

