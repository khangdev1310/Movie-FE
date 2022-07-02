import { FC } from "react";
import "./App.css";
const App: FC = () => {
  return (
    <div className="App">
      <div className="p-4 bg-red-200 header">Header</div>
      <div className="p-4 bg-blue-200 menu">Menu</div>
      <div className="p-4 bg-yellow-200 content">Content</div>
      <div className="p-4 bg-green-200 footer">Footer</div>
    </div>
  );
};

export default App; 
