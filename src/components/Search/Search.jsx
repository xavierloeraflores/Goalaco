import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
