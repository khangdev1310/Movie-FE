import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./features/Home";

const App: FC = () => {
  return (
    <div className="App">
      <div className="min-h-[calc(100vh-150px)]">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
