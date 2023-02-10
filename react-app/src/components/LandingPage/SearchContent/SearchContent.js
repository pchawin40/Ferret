// src/components/LandingPage/SearchContent/SearchContent.js

// import context
import { useSearchContent } from '../../../context/SearchContentContext';
import { useSearchSetting } from '../../../context/SearchSettingContext';

// import css
import './SearchContent.css';

// import react
import { useEffect, useState } from 'react';

//? SearchContent component
const SearchContent = () => {
  /**
   * Controlled inputs
   */
  const { currentSearchProvider, setCurrentSearchProvider } = useSearchContent();
  const { searchQuery, setSearchQuery } = useSearchContent();
  const { searchWindowSetting, setSearchWindowSetting } = useSearchSetting();
  const [currentSource, setCurrentSource] = useState("");

  /**
  * UseEffect
  */
  useEffect(() => {
    // nothing for now
  }, [searchWindowSetting]);

  useEffect(() => {
    // set current source by current search provider
    // if search query exists, parse it to convertable source

    if (searchQuery) {
      let parsedSearchQuery;

      // if current provider is "google", set to google
      if (currentSearchProvider === "google") {
        parsedSearchQuery = searchQuery.split(" ").join("+");
        setCurrentSource(`https://www.google.com/search?q=${parsedSearchQuery}`);
      } else if (currentSearchProvider === "reddit") {
        parsedSearchQuery = searchQuery.split(" ").join("%20");
        setCurrentSource(`https://www.reddit.com/search/?q=${parsedSearchQuery}`);
      } else if (currentSearchProvider === "quora") {
        parsedSearchQuery = searchQuery.split(" ").join("%20");
        setCurrentSource(`https://www.quora.com/search/?q=${parsedSearchQuery}`);
      } else if (currentSearchProvider === "stack-overflow") {
        parsedSearchQuery = searchQuery.split(" ").join("+");
        setCurrentSource(`https://www.stackoverflow.com/search/?q=${parsedSearchQuery}`);
      }
    } else {
      setCurrentSource("");
    }

  }, [currentSearchProvider, currentSource, searchQuery]);

  return (
    <section className="content container">
      {/* // TODO: To allow for other search engine result */}
      {/* URL to serve to client */}
      {
        currentSource.trim().length > 0
          ?
          <>
            <span>Your Search Link: </span>
            <a
              onClick={_ => {
                searchWindowSetting === "new-window" ? window.open(currentSource, '_blank') : window.open(currentSource, '_self')
              }}
            >
              {
                currentSource
              }
            </a>
          </>
          :
          <>
            <span
              className="empty-search-query"
            >
              Enter your search result above</span>
          </>
      }

      {/* //TODO: 5 search result callback from API */}
    </section>
  );
};

// export default component
export default SearchContent;
