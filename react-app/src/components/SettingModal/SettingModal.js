// src/components/SettingModal/SettingModal.js

// import context
import { useLanding } from '../../context/LandingContext';
import { useSearchSetting } from '../../context/SearchSettingContext';

// import css
import './SettingModal.css';

// import react
import { useEffect } from 'react';

//? SettingModal component
const SettingModal = () => {
  /** 
  * Controlled inputs
  */
  const { showSettingModal, setShowSettingModal } = useLanding();
  const { searchWindowSetting, setSearchWindowSetting } = useSearchSetting();

  /**
  * UseEffect
  */
  useEffect(() => {
    // nothing for now
  }, [searchWindowSetting]);

  return (
    <section className="setting-modal">
      {/* Top Section: Search Setting */}
      <section className="setting">
        {/* Header */}
        <h1>
          Search Setting
        </h1>

        {/* //* Options */}
        {/* Toggle Dark/Light Theme Mode */}

        {/* Toggle between opening in same window or new */}
        <fieldset className="sem">
          {/* Option 1: Open in Same Window */}
          {/* Google */}
          <figure>
            <input
              type="radio"
              name="open-type"
              value="new-window"
              defaultChecked="true"
              onClick={_ => setSearchWindowSetting("new-window")}
            />
            <label
              for="same-window"
            >
              Open in New Window
            </label>
          </figure>

          {/* Option 2: Open in New Window */}
          {/* Google */}
          <figure>
            <input
              type="radio"
              name="open-type"
              value="same-window"
              onClick={_ => setSearchWindowSetting("same-window")}
            />
            <label
              for="new-window"
            >
              Open in Same Window
            </label>
          </figure>
        </fieldset>
      </section>

      {/* Exit Icon */}
      <figure
        className="exit container"
        onClick={_ => setShowSettingModal(false)}
      >
        <i className="fa-solid fa-x" />
      </figure>
    </section >
  );
};

// export default component
export default SettingModal;
