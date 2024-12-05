'use client';
import scss from './Search.module.scss';

const Search = () => {
  return (
    <div className={scss.Search}>
      <div className="container">
        <div className={scss.content}>
          <input type="search" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default Search;
