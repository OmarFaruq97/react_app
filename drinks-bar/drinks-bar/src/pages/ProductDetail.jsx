import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./ProductDetail.css"; // <-- external CSS
import "./css/ProductDetail.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(url + id);
      const data = await response.json();
      setProduct(data.drinks[0]);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <img src={product.strDrinkThumb} alt={product.strDrink} />
      <div className="product-detail-info">
        <h1>{product.strDrink}</h1>
        <p><strong>Category:</strong> {product.strCategory}</p>
        <p><strong>Alcoholic:</strong> {product.strAlcoholic}</p>
        <p><strong>Glass:</strong> {product.strGlass}</p>
        <p><strong>Instructions:</strong> {product.strInstructions}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
