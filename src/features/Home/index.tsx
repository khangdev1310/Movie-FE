import React from "react";
import { FC } from "react";
import DataGrid from "../../components/DataGrid";

const Home: FC = () => {
  const objDataTest = [
    {
      id: "1",
      image: "https://picsum.photos/id/1/200/200",
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: "2",
      image: "https://picsum.photos/id/2/200/200",
      title: "Title 2",
      description: "Description 2",
    },
  ];

  return (
    <div className="mx-[5vw] pb-6">
      <h1 className="mt-4 mb-3 text-2xl">Recommended</h1>
      <DataGrid data={objDataTest} type="button" />
    </div>
  );
};

export default Home;
