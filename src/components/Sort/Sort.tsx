import style from './Sort.module.scss';
import React from 'react';
import { setSort} from '../../redux/filter/slice.ts';
import {useDispatch } from 'react-redux/es/exports';
import {SortState} from '../../redux/filter/types.ts'


type SortProps = {
  value: SortState
}

const Sort: React.FC<SortProps> = React.memo(({value}) => {
  const [open, setOpen] = React.useState(false);


  const dispatch = useDispatch();

  type sortItem = {
    name: string;
    sortProperty: string;
  }

  const list: sortItem[] = [
    { name: 'популярности', sortProperty: 'raiting' },
    { name: 'цене убыванию', sortProperty: 'price' },
    { name: 'цене возрастаснию', sortProperty: '-price' },
    { name: 'алфавиту', sortProperty: '-title' },
  ];

  const onClickSelected = (obj: sortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div className={style.sort}>
      <div className={style.sort__label} onClick={() => setOpen(!open)}>
      
        <div className={style.sort__labelWord}>
          <b>Сортировка по:</b>
          <span>{value.name}</span>
        </div>
      </div>
      {open && (
        <div className={style.sort__popup}>
          <ul>
            {list.map((obj, index) => (
              <li
                key={index}
                onClick={() => onClickSelected(obj)}
                className={value.sortProperty === obj.sortProperty ? style.active : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
)
export default Sort;
