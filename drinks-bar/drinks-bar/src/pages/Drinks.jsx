import { useEffect, useState } from "react";
import "./css/Drinks.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const Drinks = () => {
  const [myFaruk, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      const iqram = await response.json();

      setProducts(iqram.drinks);

      console.log(iqram.drinks);
    };
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <div className="cocktails-container">
        {myFaruk.map((myFaruk) => (
          <div className="cocktail-card" key={myFaruk.idDrink}>
            <img alt="" src={myFaruk.strDrinkThumb} className="cocktail-img" />
            <div className="cocktail-info">
              <div className="content-text">
                <h2 className="cocktail-name"> {myFaruk.strDrink}</h2>
                <span className="cocktail-info"> {myFaruk.strCategory} </span>
              </div>
              <div className="btn">View Details</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Drinks;
