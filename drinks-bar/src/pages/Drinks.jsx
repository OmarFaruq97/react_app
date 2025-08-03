import { useEffect, useState } from "react";
import "./css/Drinks.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const Drinks = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setProducts(data.drinks);
      console.log(data.drinks);
    };
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <div className="cocktails-container">
        {products.map((product) => (
          <div className="cocktail-card" key={product.idDrink}>
            <img alt="" src={product.strDrinkThumb} className="cocktail-img" />
            <div className="cocktail-info">
              <div className="content-text">
                <h2 className="cocktail-name"> {product.strDrink}</h2>
                <span className="cocktail-info"> {product.strCategory} </span>
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
