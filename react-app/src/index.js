// import react
import React from 'react';

// import react-dom
import ReactDOM from 'react-dom';

// import react-redux
import { Provider } from 'react-redux';

// import css
import './index.css';

// import component
import App from './App';

// import store
import configureStore from './store';
import LandingProvider from './context/LandingContext';
import SearchContentProvider from './context/SearchContentContext';
import { ModalProvider } from './context/Modal';
import SearchSettingProvider from './context/SearchSettingContext';

// import context

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <LandingProvider>
          <SearchContentProvider>
            <SearchSettingProvider>
              <App />
            </SearchSettingProvider>
          </SearchContentProvider>
        </LandingProvider>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
