import { useState } from "react";
import Cards from "./Cards";
import AccentMobile from "./assets/bg-header-mobile.svg";
import AccentDesktop from "./assets/bg-header-desktop.svg";
import Delete from "./assets/icon-close.svg";
import classes from "./App.module.css";

const SearchBar = ({ filteredTags, deleteTag, clearTags }) => {
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchBar}>
        <div className={classes.tags}>
          {filteredTags.map((tag, i) => (
            <div className={classes.tag} key={i}>
              <span className={classes.tagText}>{tag}</span>
              <span className={classes.delete} onClick={() => deleteTag(tag)}>
                <img src={Delete} alt="Delete Tag" />
              </span>
            </div>
          ))}
        </div>
        <p className={classes.clear} onClick={clearTags}>Clear</p>
      </div>
    </div>
  );
};

function App() {
  const [filteredTags, setFilteredTags] = useState([]);
  const handleFilteredTags = (e) => {
    const tag = e.target.innerText;
    if (!filteredTags.includes(tag)) {
      setFilteredTags((prevState) => [...prevState, tag]);
    }
  };
  const deleteTag = (tag) => {
    let newArray = filteredTags.filter((val) => val !== tag);
    setFilteredTags(newArray);
  };
  const clearTags = ()=> {
    setFilteredTags([])
  }

  return (
    <main className={classes.main}>
      <picture className={classes.accent}>
        <source srcSet={AccentDesktop} media="(min-width: 45em)" />
        <img src={AccentMobile} alt="" />
      </picture>
      {filteredTags.length > 0 && (
        <SearchBar filteredTags={filteredTags} deleteTag={deleteTag} clearTags={clearTags}/>
      )}
      <Cards handleFilteredTags={handleFilteredTags} filteredTags={filteredTags} />
    </main>
  );
}

export default App;
