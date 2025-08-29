import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/ProductDetail.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(url + id);
        const data = await response.json();
        setProduct(data.drinks ? data.drinks[0] : null);
      } catch (error) {
        console.error("Error fetching product: ", error);
        setError(false);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  if (Loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (error || !product) {
    return <div className="loading">Failed to load product. Try again!</div>;
  }

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
  } = product;

  return (
    <div className="product-detail-container">
      <img src={strDrinkThumb} alt={strDrink} className="product-img" />
      <div className="product-detail-info">
        <h1>{strDrink}</h1>
        <p>
          <strong>Category:</strong> {strCategory}
        </p>
        <p>
          <strong>Alcoholic:</strong> {strAlcoholic}
        </p>
        <p>
          <strong>Glass:</strong> {strGlass}
        </p>
        <p>
          <strong>Instructions:</strong> {strInstructions}
        </p>
      </div>
    </div>
  );
};
export default ProductDetail;
