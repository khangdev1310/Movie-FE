import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // navigate(`/search?x=${encodeURIComponent(inputValue.trim())}`);
      console.log(`?x=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  return (
    <div
      className={`${
        isOpen ? "h-[122px]" : "h-16"
      } sm:!h-16 border-b border-gray-800 flex flex-col sm:flex-row justify-center gap-4 sm:justify-between items-stretch sm:items-center px-[5vw] `}
    >
      <div className="flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/home");
          }}
        >
          <img
            className="w-12 h-12 rotate-45 justify-between"
            src="/music1.png"
            alt="music"
          />
          <h1 className="text-xl">Music</h1>
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
          className="bg-dark border border-gray-600 rounded-full w-full px-3 py-2 outline-none md:w-60 duration-300 hover:border-purple-hover pr-[40px]
		  "
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2">
          <AiOutlineSearch className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};
export default NavBar;
