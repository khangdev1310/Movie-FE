import React, { FC } from "react";
import { FaPlay } from "react-icons/fa";

interface DataGridProps {
  data: {
    id: string;
    image: string;
    title: string;
    description?: string;
  }[];
  type: "link" | "button";
}

const DataGrid: FC<DataGridProps> = ({ data, type }) => {
  return (
    <div className="grid grid-cols-fill-small md:grid-cols-fill-medium gap-3">
      {data.map((item) => {
        const children = (
          <>
            <div className="w-full relative bg-gray-800 h-0 pb-[100%] group">
              <img
                src={item.image}
                alt="test"
                className="absolute h-full w-full object-cover rounded-md group-hover:brightness-[80%] transition duration-300"
              />

              <div
                className="absolute h-10 w-10 rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center
        opacity-0 group-hover:opacity-100 transition duration-300
        "
              >
                <FaPlay className="w-5 h-5 fill-white" />
              </div>
            </div>

            <p className="mt-2 font-medium line-clamp-3  group-hover:text-purple-hover transition duration-300">
              {item.title}
            </p>
            {item.description && (
              <p className="text-gray-400 line-clamp-2">{item.description} </p>
            )}
          </>
        );

        return (
          <div key={item.id}>
            <div className="w-full transition duration-300 bg-dark hover:bg-dark-hovered p-2 rounded-md relative group cursor-pointer">
              {children}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataGrid;
