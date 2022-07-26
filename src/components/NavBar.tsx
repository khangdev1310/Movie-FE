import { FC, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import useDarkMode from "./DarkMode";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [theme, toggleDarkMode] = useDarkMode();

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.search]);

  return (
    <div
      className={`${
        isOpen ? "h-[122px]" : "h-16"
      } md:!h-16 dark:border-b-gray-800 border-gray-800 flex flex-col md:flex-row justify-center gap-4 md:justify-between items-stretch md:items-center px-[5vw] `}
    >
      <div className="flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            className="w-12 h-12 rotate-45 justify-between"
            src="/music1.png"
            alt="music"
          />

          <h1 className="text-xl">Music</h1>
          {theme ? (
            <BsSunFill
              color="yellow"
              className="pl-1 w-8 h-8 cursor-pointer"
              onClick={() => toggleDarkMode(!theme)}
            />
          ) : (
            <BsFillMoonFill
              color="yellow"
              className="pl-1 w-8 h-8 cursor-pointer"
              onClick={() => toggleDarkMode(!theme)}
            />
          )}
        </div>
        <button className="sm:hidden" onClick={handleOpen}>
          {isOpen ? (
            <MdCancel className="w-6 h-6 font-extrabold" />
          ) : (
            <AiOutlineSearch className="w-6 h-6 font-extrabold" />
          )}
        </button>
      </div>

      <form
        className={`relative ${isOpen ? "flex" : "hidden"} sm:!flex `}
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
          className="bg-dark border border-gray-600 rounded-full 
          w-full px-3 py-2 outline-none md:w-60 duration-300 dark:hover:border-purple-hover pr-[40px]
          text-white
		  "
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2">
          <AiOutlineSearch className="w-6 h-6 fill-white" />
        </button>
      </form>
    </div>
  );
};
export default NavBar;
