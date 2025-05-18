import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "../components/dashboard";

export const RoutesFile = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
