// src/components/LandingPage/Search/Search.js

// import context
import { useEffect } from 'react';
import { useSearchContent } from '../../../context/SearchContentContext';

// import css
import './Search.css';

//? Search component
const Search = () => {
  /**
   * Controlled inputs
   */
  const { currentSearchProvider, setCurrentSearchProvider } = useSearchContent();
  const { searchQuery, setSearchQuery } = useSearchContent();

  /**
  * UseEffect
  */
  useEffect(() => {
    // set current source by current search provider
  }, [searchQuery]);

  return (
    <section className="search container">
      {/* //* Top Search */}
      <form
        className="top search"
      >
        {/* Search Box */}
        <input
          className="search-box"
          placeholder="Enter Search Here"
          onChange={e => setSearchQuery(e.target.value)}
        />
      </form>

      {/* //* Lower Search */}
      <section className="lower search">
        {/* search engine selection */}
        <fieldset className="ses">
          {/* Google */}
          <figure>
            <input
              type="radio"
              name="search-engine"
              value="google"
              defaultChecked="true"
              onClick={_ => setCurrentSearchProvider("google")}
            />
            <label
              for="google"
            >
              Google
            </label>
          </figure>

          {/* Reddit */}
          <figure>
            <input
              type="radio"
              name="search-engine"
              value="reddit"
              onClick={_ => setCurrentSearchProvider("reddit")}
            />
            <label
              for="reddit"
            >
              Reddit
            </label>
          </figure>

          {/* Quora */}
          <figure>
            <input
              type="radio"
              name="search-engine"
              value="quora"
              onClick={_ => setCurrentSearchProvider("quora")}
            />
            <label
              for="quora"
            >
              Quora
            </label>
          </figure>

          {/* Stack Overflow */}
          <figure>
            <input
              type="radio"
              name="search-engine"
              value="stack-overflow"
              onClick={_ => setCurrentSearchProvider("stack-overflow")}
            />
            <label
              for="stack-overflow"
            >
              Stack Overflow
            </label>
          </figure>
        </fieldset>
      </section>
    </section>
  );
};

// export default component
export default Search;
