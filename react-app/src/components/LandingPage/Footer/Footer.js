// src/components/LandingPage/Footer/Footer.js

// import component
import SettingModal from "../../SettingModal";

// import context
import { useLanding } from "../../../context/LandingContext";
import { Modal } from "../../../context/Modal";

// import css
import './Footer.css';

// import react-router-dom
import { NavLink } from "react-router-dom";

// import react
import { useEffect } from "react";

//? Footer component
const Footer = () => {
  /** 
   * Controlled inputs
   */
  const { showSettingModal, setShowSettingModal } = useLanding();

  /**
   * UseEffect
   */
  useEffect(() => {

  }, [showSettingModal]);

  return (
    <footer>
      {/* Left Section */}
      <section>
        {/* Setting Modal */}
        <figure
          className="setting-modal"
          onClick={_ => setShowSettingModal(true)}
        >
          <i
            className="fa-solid fa-gear fa-2xl"
          />
        </figure>
      </section>

      {/* Right Section */}
      <section>
        {/* GitHub */}
        <figure className="github">
          <i
            className="fa-brands fa-github fa-2xl"
            onClick={_ => {
              return window.open('https://github.com/pchawin40', '_blank')
            }}
          />
        </figure>

        {/* LinkedIn */}
        <figure className="linkedin">
          <i
            className="fa-brands fa-linkedin-in fa-2xl"
            onClick={_ => {
              return window.open('https://www.linkedin.com/in/chawin-pathompornvivat/', '_blank')
            }}
          />
        </figure>
      </section>

      {showSettingModal && (
        <Modal
          onClose={(_) => {
            setShowSettingModal(false);
          }}
        >
          <SettingModal />
        </Modal>
      )}
      
    </footer>
  );
};

// export default component
export default Footer;
