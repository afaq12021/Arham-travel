import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/reusable/Layout";


const AppRoutes = () => (
  <Router>
    <Routes>
       <Route path="/" element={<Layout><Home /></Layout>} />
      
    </Routes>
  </Router>
);

export default AppRoutes;
