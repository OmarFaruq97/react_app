import { useEffect, useState } from "react";
import "./css/SearchByCategory.css";
import { data } from "react-router-dom";

const catergoriesUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

const SearchByCategory = () => {
  const [catergories, searchCategories] = useState([]);

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
      console.error("error fetching date: ", data);
    }
  };

  return (
    <div className="container">
      {catergories.map((category) => (
        <button key={category.strCategory} className="categoryBtn">
          {category.strCategory}
        </button>
      ))}
    </div>
  );
};

export default SearchByCategory;
