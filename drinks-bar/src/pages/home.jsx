
import { NavLink } from "react-router-dom";
import"./css/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h1 className="banner-title">Welcome to our Drinks Bar!</h1>
        <p className="banner-text">
          Discover refreshing beverages and enjoy a cozy atmosphere. Book your table and time easily to relax and savor your favorite drinks with friends. Cheers to great moments and new favorites!
        </p>
        <NavLink to="/drinks" className="btn">
          View Drinks
        </NavLink>
      </div>
    </div>
  );
};

export default Home;


/*
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="banner-container">
        <div className="banner">
          <p>
            Welcome to our Drinks Bar! Discover refreshing beverages and enjoy a
            cozy atmosphere. Book your table and time easily to relax and savor
            your favorite drinks with friends. Cheers to great moments and new
            favorites!
          </p>
          <div className="btn">
            <NavLink to="/drinks">View Drinks</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
*/