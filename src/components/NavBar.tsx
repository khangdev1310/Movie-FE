import { debounce } from 'lodash';
import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useDarkMode from './DarkMode';

const StyledImg = styled.img`
  width: 48px;
  height: 48px;
  justify-content: space-between;
  transform: rotate(45deg);
`;

const StyleInput = styled.input`
  width: 100%;
  background: black;
  border: 1px solid rgb(75 85 99 / var(--tw-border-opacity));
  border-radius: 9999px;
  padding: 8px 40px 8px 12px;
  outline: none;
  transition: all 0.3s;
  color: white;
  @media (min-width: 768px) {
    width: 15rem;
  }
`;

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [theme, toggleDarkMode] = useDarkMode();

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // eslint-disable-next-line react/prop-types
  function ButtonSearch({ handleOpen, isOpen }) {
    return (
      <button className="md:hidden" onClick={handleOpen}>
        {isOpen ? (
          <MdCancel className="w-6 h-6 font-extrabold" />
        ) : (
          <AiOutlineSearch className="w-6 h-6 font-extrabold" />
        )}
      </button>
    );
  }
  // Input

  const handleSubmitForm = (e: FormEvent, value: string) => {
    e.preventDefault();
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value.trim())}`);
    }

    if (value.trim() === '') {
      navigate('/');
    }
  };
  const debouncedSearch = useRef(
    debounce(async (event, criteria) => {
      handleSubmitForm(event, criteria);
      setInputValue(criteria);
    }, 1000)
  ).current;

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e, e.target.value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.search]);

  return (
    <div
      className={`${
        isOpen ? 'h-[122px]' : 'h-16'
      } md:!h-16 dark:border-b-gray-800 border-gray-800 flex flex-col md:flex-row justify-center gap-4 md:justify-between items-stretch md:items-center px-[5vw] `}
    >
      <div className="flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        >
          <StyledImg src="/music1.png" alt="music" />

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
        <p
          className="flex justify-center items-center pr-3 cursor-pointer md:hidden"
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
        >
          Đăng xuất
        </p>
        <ButtonSearch handleOpen={handleOpen} isOpen={isOpen} />
      </div>

      <form
        className={`relative ${isOpen ? 'flex' : 'hidden'} sm:!flex `}
        onSubmit={(e) => handleSubmitForm(e, inputValue)}
      >
        <p
          className="justify-center items-center pr-0 md:pr-3 cursor-pointer hidden md:flex dark:hover:text-purple-hover duration-300"
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
        >
          Đăng xuất
        </p>
        <StyleInput
          type="text"
          onChange={handleChangeSearch}
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
          className="dark:hover:border-purple-hover "
        />

        <button className="absolute right-2 top-1/2 -translate-y-1/2">
          <AiOutlineSearch className="w-6 h-6 fill-white" />
        </button>
      </form>
    </div>
  );
};
export default NavBar;
