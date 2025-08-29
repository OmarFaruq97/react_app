import { useEffect, useState } from "react";
import "./css/RandomDrinks.css";

const randomDrinksUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const RandomDrinks = () => {
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch(randomDrinksUrl);
      const { drinks } = await response.json();
      console.log(drinks[0]);
      setProduct(drinks[0]);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <button className="btn" onClick={fetchProduct}>
        Get Random Drink
      </button>

      <div className="product-detail-container">
        <img
          src={product.strDrinkThumb}
          alt={product.strDrink}
          className="product-img"
        />
        <div className="product-detail-info">
          <h1>{product.strDrink}</h1>
          <p>
            <strong>Category:</strong> {product.strCategory}
          </p>
          <p>
            <strong>Alcoholic:</strong> {product.strAlcoholic}
          </p>
          <p>
            <strong>Glass:</strong> {product.strGlass}
          </p>
          <p>
            <strong>Instructions:</strong> {product.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RandomDrinks;
