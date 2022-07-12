import React from "react";
import { FC } from "react";
import DataGrid from "../../components/DataGrid";
import DataTest from "../../ultils/index";

const Home: FC = () => {
  return (
    <div className="mx-[5vw] pb-6">
      <h1 className="mt-4 mb-3 text-2xl">Recommended</h1>
      <DataGrid data={DataTest.getData()} type="button" />

      <h1 className="mt-4 mb-3 text-2xl">Categories</h1>
      <DataGrid data={DataTest.getCategories()} type="button"/>
    </div>
  );
};

export default Home;
