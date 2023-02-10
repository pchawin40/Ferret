// src/components/LandingPage/LandingPage.js

// import components
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import SearchContent from "./SearchContent";

// import css
import './LandingPage.css';

//? LandingPage component
const LandingPage = () => {
  return (
    <section className="landing-page">
      {/* Header */}
      <Header />

      {/* Search */}
      <Search />

      {/* Search Content */}
      <SearchContent />

      {/* Footer */}
      <Footer />
    </section>
  );
};

// export default component
export default LandingPage;
