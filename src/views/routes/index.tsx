import { Route, Routes } from "react-router-dom";
import Classified from "../pages/Classified";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/classified" element={<Classified />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}
export default AllRoutes;
