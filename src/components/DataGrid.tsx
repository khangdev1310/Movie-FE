import React, { FC } from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

interface DataGridProps {
  data: {
    id: string;
    image: string;
    title: string;
    description?: string;
  }[];
  type: "link" | "button";
  handler: Function;
  classType?: string;
}

const DataGrid: FC<DataGridProps> = ({ data, type, handler, classType }) => {
  return (
    <div className="grid grid-cols-fill-small md:grid-cols-fill-medium gap-3 text-white font-bold">
      {data.map((item) => {
        const children = (
          <>
            <div className="w-full relative bg-gray-800 h-0 pb-[100%] group">
              <img
                src={item.image}
                alt="test"
                className="absolute h-full w-full object-cover dark:rounded-md group-hover:brightness-[80%] transition duration-300"
              />

              <div
                className="absolute h-10 w-10 rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center
        opacity-0 group-hover:opacity-100 transition duration-300
        "
              >
                <FaPlay className="w-5 h-5 fill-white" />
              </div>
            </div>

            <p
              className={
                `mt-2 font-medium   dark:group-hover:text-purple-hover transition duration-300  dark:text-white
              truncate 
            ` + (classType ? classType : "text-indigo-600")
              }
            >
              {item.title}
            </p>
            {item.description && (
              <p className="text-dark dark:text-gray-400 line-clamp-2">
                {item.description}{" "}
              </p>
            )}
          </>
        );

        if (type === "link")
          return (
            <div key={item.id}>
              <Link
                className={`w-full block transition duration-300  p-2 
                rounded-md relative group shadow-md bg-gradient-to-b from-white/40 to-transparent hover:bg-gray-500
                dark:from-dark dark:to-dark dark:hover:bg-dark-hovered`}
                to={handler(item.id)}
              >
                {children}
              </Link>
            </div>
          );

        return (
          <div key={item.id}>
            <div
              className={`w-full transition duration-300  p-2 rounded-md relative group cursor-pointer shadow-md bg-gradient-to-b from-white/40 to-transparent hover:bg-gray-700
              dark:from-dark dark:to-dark dark:hover:bg-dark-hovered h-[280px]`}
              onClick={() => handler(item.id)}
            >
              {children}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataGrid;
