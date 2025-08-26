import { useEffect, useState } from "react";
import "./css/SearchByCategory.css";
import { Link } from "react-router-dom";

const categoriesUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

const SearchByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({}); // cache results

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(categoriesUrl);
      const { drinks } = await response.json();
      setCategories(drinks);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProduct = async (category) => {
    if (cache[category]) {
      //load from cache if available
      setProducts(cache[category]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
          category
        )}`
      );
      const { drinks } = await response.json();
      setProducts(drinks);
      setCache((prev) => ({ ...prev, [category]: drinks })); // save to cache
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Category Buttons */}
      <div className="category-bar">
        {categories.map((category) => (
          <button
            key={category.strCategory}
            className="categoryBtn"
            onClick={() => fetchProduct(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="cocktails-container">
        {loading ? (
          <p className="loading-text">Loading drinks...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <div className="cocktail-card" key={product.idDrink}>
              <img
                alt={product.strDrink}
                src={product.strDrinkThumb}
                className="cocktail-img"
              />
              <div className="cocktail-info">
                <h2 className="cocktail-name">{product.strDrink}</h2>
                <Link to={`/drink/${product.idDrink}`} className="btn">
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="loading-text">Select a category to view drinks.</p>
        )}
      </div>
    </div>
  );
};

export default SearchByCategory;


/*import { useEffect, useState } from "react";
import "./css/SearchByCategory.css";
import { Link } from "react-router-dom";

const catergoriesUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

const SearchByCategory = () => {
  const [catergories, searchCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(catergoriesUrl);
      const { drinks } = await response.json();
      console.log("categories", drinks);

      searchCategories(drinks);
    } catch (error) {
      console.error("error fetching date: ", error);
    }
  };

  const fetchProduct = async (category) => {
    console.log(category);

    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + category
      );
      const { drinks } = await response.json();
      console.log(drinks);
      setProducts(drinks);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="container">
      {catergories.map((category) => (
        <button
          key={category.strCategory}
          className="categoryBtn"
          onClick={() => fetchProduct(category.strCategory)}
        >
          {category.strCategory}
        </button>
      ))}

      <div className="cocktails-container">
        {products.map((product) => (
          <div className="cocktail-card" key={product.id}>
            <img alt="" src={product.strDrinkThumb} className="cocktail-img" />
            <div className="cocktail-info">
              <div className="content-text">
                <h2 className="cocktail-name">{product.strDrink}</h2>
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

export default SearchByCategory;
*/