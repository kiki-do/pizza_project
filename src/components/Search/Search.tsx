import style from './Search.module.scss';
import { searchContext } from '../../App.tsx';
import React from 'react';
import debounce from 'lodash.debounce';


const Search = () => {
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');
  const  {setSearch}  = React.useContext(searchContext);

  const removeSearch = () => {
    setValue('');
    setSearch('');
    if(searchRef.current)
      {searchRef.current.focus();}
  };

  const searchDebounce = React.useCallback(
    debounce((str) => {
      setSearch(str);
    }, 250),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    searchDebounce(e.target.value);
  };

  return (
    <div className={style.search}>
      <label htmlFor="">
        <input
          ref={searchRef}
          className={style.search__text}
          type="text"
          placeholder="Поиск пицц..."
          onChange={onChangeInput}
          value={value}></input>
        {value.length > 0 ? (
          <svg
            className={style.search__svg}
            onClick={removeSearch}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" fill="white" stroke="#636363" strokeWidth="2" />
            <path
              d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z"
              fill="#636363"
            />
          </svg>
        ) : (
          ''
        )}
      </label>
    </div>
  );
};

export default Search;
