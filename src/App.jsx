import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";
const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Sobre />
      </>
    </Router>
  );
};
export default App;
 
