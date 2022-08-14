import { FC } from 'react';
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
  classType?: string;
}

const GridItem: any = (item, handler, classType) => (
  <div
    className="w-full transition duration-300  p-2 rounded-md relative group cursor-pointer md:shadow-md bg-gradient-to-b from-white/40 to-transparent hover:bg-gray-700
    dark:from-dark dark:to-dark dark:hover:bg-dark-hovered h-[100%]"
    onClick={() => handler(item.id)}
    key={item.id}
  >
    <div className="w-full relative bg-gray-800 h-0 pb-[100%] group">
      <img
        src={item.image}
        alt="test"
        className="absolute h-full w-full object-cover dark:rounded-md group-hover:brightness-[80%] transition duration-300"
      />
      <div
        className="absolute h-10 w-10 rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center
        opacity-0 group-hover:opacity-100 transition duration-300"
      >
        <FaPlay className="w-5 h-5 fill-white" />
      </div>
    </div>

    <p
      className={
        `mt-2 font-medium   dark:group-hover:text-purple-hover transition duration-300  dark:text-white
              truncate 
            ` + (classType ? classType : 'text-indigo-600')
      }
    >
      {item.title}
    </p>
    {item.description && (
      <p className="text-dark dark:text-gray-400 line-clamp-2">
        {item.description}{' '}
      </p>
    )}
  </div>
);

const GridItemLink: FC<DataType> = (item, handler) => {
  return (
    <div key={item?.id}>
      <Link to={handler(item?.id)}>{GridItem(item, handler)}</Link>
    </div>
  );
};

const dataTest = {
  id: '15',
  title: 'Error boundary',
  image: 'https://i.scdn.co/image/ab67616d0000b273bd14e958d6f3eabbcad5476b',
  description: 'test error boundary',
};

const handleTest = () => {
  return `album/` + dataTest.id;
};

const DataGrid: FC<DataGridProps> = ({ data, type, handler, classType }) => {
  return (
    <div className="grid grid-cols-fill-small md:grid-cols-fill-medium gap-3 text-white font-bold">
      {data.map((item) => {
        return type === 'link'
          ? GridItemLink(item, handler)
          : GridItem(item, handler, classType);
      })}
      <div>
        <div key="aaaa">{GridItemLink(dataTest, handleTest)}</div>
      </div>
    </div>
  );
};

export default DataGrid;
