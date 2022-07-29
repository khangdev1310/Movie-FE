import React, { FC } from 'react';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type DataType = {
  id: string;
  image: string;
  title: string;
  description?: string;
};

interface DataGridProps {
  data: DataType[];
  type: 'link' | 'button';
  handler: Function;
}

const DataGrid: FC<DataGridProps> = ({ data, type, handler }) => {
  return (
    <div className="grid gap-3 grid-cols-fill-small md:grid-cols-fill-medium">
      {data.map((item) => {
        const children = (
          <>
            <div className="w-full relative bg-gray-800 h-0 pb-[100%] group">
              <img
                src={item.image}
                alt="test"
                className="absolute h-full w-full object-cover rounded-md group-hover:brightness-[80%] transition duration-300"
              />

              <div className="absolute flex items-center justify-center w-10 h-10 transition duration-300 -translate-x-1/2 -translate-y-1/2 border rounded-full opacity-0 top-1/2 left-1/2 group-hover:opacity-100 ">
                <FaPlay className="w-5 h-5 fill-white" />
              </div>
            </div>

            <p className="mt-2 font-medium transition duration-300 line-clamp-3 group-hover:text-purple-hover">
              {item.title}
            </p>
            {item.description && (
              <p className="text-gray-400 line-clamp-2">{item.description} </p>
            )}
          </>
        );

        if (type === 'link')
          return (
            <div key={item.id}>
              <Link
                className="relative block w-full p-2 transition duration-300 rounded-md bg-dark hover:bg-dark-hovered group"
                to={handler(item.id)}
              >
                {children}
              </Link>
            </div>
          );

        return (
          <div key={item.id}>
            <div
              className="relative w-full p-2 transition duration-300 rounded-md cursor-pointer bg-dark hover:bg-dark-hovered group"
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
