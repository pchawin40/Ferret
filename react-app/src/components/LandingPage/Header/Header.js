// src/components/LandingPage/Header/Header.js

// import css
import './Header.css';

//? Header component
const Header = () => {
  return (
    <section className="logo-header">
      {/* Image */}
      <img
        alt="logo header"
        src="https://res.cloudinary.com/dfz7bzhoi/image/upload/v1675666039/Ferret/Logo_w_text_dmt1i3.png"
      />

      {/* Subheader */}
      <h2>Your favorite search engines at your fingertips</h2>
    </section>
  );
};

// export default component
export default Header;
