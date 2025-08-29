import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; //  Already present
import "./css/Drinks.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const Drinks = () => {
  const [products, setProducts] = useState([]); // renamed from previous 'product'
  const [loading, setLoading] = useState(true); // NEW: loading state for better UX

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const { drinks } = await response.json(); // destructure data for clarity
        setProducts(drinks || []); // allback to empty array if drinks is null
      } catch (error) {
        console.error("Error fetching drinks:", error); //  better error logging
        setProducts([]); //  fallback on error
      } finally {
        setLoading(false); //  ensures loading stops after fetch
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading drinks...</div>; // show loading UI
  }

  return (
    <div className="container">
      <div className="cocktails-container">
        {products.map((product) => {
          //  destructuring for cleaner code
          const { idDrink, strDrink, strDrinkThumb, strCategory } = product;
          return (
            <div className="cocktail-card" key={idDrink}>
              <img
                src={strDrinkThumb}
                alt={strDrink}
                className="cocktail-img"
              />
              <div className="cocktail-info">
                <h2 className="cocktail-name">{strDrink}</h2>
                <span className="cocktail-category">{strCategory}</span>
                <Link to={`/drink/${idDrink}`} className="btn">
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Drinks;

/*
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./css/Drinks.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const Drinks = () => {
  const [products, setProducts] = useState([]); // renamed

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setProducts(data.drinks); // renamed
      console.log(data.drinks);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="cocktails-container">
        {products.map((product) => (
          <div className="cocktail-card" key={product.id}>
            <img alt="" src={product.strDrinkThumb} className="cocktail-img" />
            <div className="cocktail-info">
              <div className="content-text">
                <h2 className="cocktail-name">{product.strDrink}</h2>
                <span className="cocktail-info">{product.strCategory}</span>
              </div>
              <Link to={`/drink/${product.idDrink}`}>
                <div className="btn">View Details</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
*/
