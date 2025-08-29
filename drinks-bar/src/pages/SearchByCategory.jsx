import { useEffect, useState, useCallback } from "react"; // Added useCallback for better function optimization
import "./css/SearchByCategory.css";
import { Link } from "react-router-dom";

// Moved URLs to constants (already done, kept as best practice)
const CATEGORIES_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
const PRODUCTS_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

const SearchByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // keep track of loading state
  const [error, setError] = useState(""); // Added error state to show user-friendly messages
  const [cache, setCache] = useState({}); // Caching API responses for faster performance

  // useEffect remains the same, but we add error handling
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(CATEGORIES_URL);
        const { drinks } = await response.json();
        setCategories(drinks || []); //  Add fallback to avoid null error
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories. Please try again."); // Show user-friendly message
      }
    };
    fetchCategories();
  }, []);

  //  Optimized fetchProduct using useCallback and cache
  const fetchProduct = useCallback(
    async (category) => {
      if (cache[category]) {
        //  Load from cache if available → faster than fetching again
        setProducts(cache[category]);
        return;
      }

      setLoading(true); // Show loading spinner/message
      setError(""); // Clear previous errors

      try {
        const response = await fetch(
          PRODUCTS_URL + encodeURIComponent(category)
        ); // encode category
        const { drinks } = await response.json();
        setProducts(drinks || []); //  Fallback for empty data
        setCache((prev) => ({ ...prev, [category]: drinks || [] })); // Save results to cache
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load drinks. Please try again."); //  Error handling
      } finally {
        setLoading(false); //  Stop loading after fetch
      }
    },
    [cache]
  );

  // Early return for error state → cleaner JSX
  if (error) {
    return <div className="error-text">{error}</div>; // Display error message
  }

  return (
    <div className="container">
      {/* Category Buttons */}
      <div className="category-bar">
        {categories.map((category) => (
          <button
            key={category.strCategory}
            className="categoryBtn"
            onClick={() => fetchProduct(category.strCategory)} //  Calls optimized fetchProduct
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="cocktails-container">
        {loading ? ( //  Show loading message
          <p className="loading-text">Loading drinks...</p>
        ) : products.length > 0 ? (
          products.map(
            (
              { idDrink, strDrink, strDrinkThumb } //  Destructured mapping for cleaner code
            ) => (
              <div className="cocktail-card" key={idDrink}>
                <img
                  alt={strDrink}
                  src={strDrinkThumb}
                  className="cocktail-img"
                  loading="lazy" //  Lazy loading images → faster initial render
                />
                <div className="cocktail-info">
                  <h2 className="cocktail-name">{strDrink}</h2>
                  <Link to={`/drink/${idDrink}`} className="btn">
                    View Details
                  </Link>
                </div>
              </div>
            )
          )
        ) : (
          <p className="loading-text">Select a category to view drinks.</p> // Empty state message
        )}
      </div>
    </div>
  );
};

export default SearchByCategory;
