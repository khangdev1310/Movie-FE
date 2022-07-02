import { FC } from "react";
import "./App.css";
const App: FC = () => {
  return (
    <div className="flex flex-col h-screen gap-1">
      <div className="p-4 bg-red-200 h-[100px]">Header</div>
      <div className="flex flex-col h-full gap-1 md:flex-row">
        <div className="p-4 bg-blue-200 h-[100px] md:h-full">Table of Content</div>
        <div className="h-full p-4 bg-yellow-200 md:w-full">Content</div>
      </div>
      <div className="p-4 bg-green-200 h-[100px]">Footer</div>
    </div>
  );
};

export default App;
