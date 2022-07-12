import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Audio from "./components/Audio";

import NavBar from "./components/NavBar";
import Home from "./features/Home";

const App: FC = () => {
  return (
    <div className="App">
      <div className="min-h-full">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>

      <Audio />
    </div>
  );
};

export default App;
