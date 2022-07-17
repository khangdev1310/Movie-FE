import React, { FC } from "react";
import { FaPlay } from "react-icons/fa";

type DataType = {
    id: string;
    image: string;
    title: string;
    description?: string;
  };

interface DataGridProps {
  data: DataType[];
  type: "link" | "button";
}

const GridItem: FC<DataType> = (item) => (
  <div key={item.id} className='p-2 bg-gray-800 group'>
    <div className="w-full relative h-0 pb-[100%]  cursor-pointer">
      <img
        src={item.image}
        alt="test"
        className="absolute h-full w-full object-cover rounded-md group-hover:brightness-[80%] transition duration-300"
      />

      <div
        className="absolute flex items-center justify-center w-10 h-10 transition duration-300 -translate-x-1/2 -translate-y-1/2 border rounded-full opacity-0 top-1/2 left-1/2 group-hover:opacity-100 "
      >
        <FaPlay className="w-5 h-5 fill-white" />
      </div>
    </div>

    <p className="mt-2 font-medium transition duration-300 line-clamp-3 group-hover:text-purple-hover">
      {item.title}
    </p>
    {item.description && (
      <p className="text-gray-400 line-clamp-2">{item.description} </p>
    )}
  </div>
 )

const DataGrid: FC<DataGridProps> = ({ data }) => {
  return (
    <div className="grid gap-3 grid-cols-fill-small md:grid-cols-fill-medium">
      {data.map((item) =>  GridItem(item))}
    </div>
  );
};

export default DataGrid;
