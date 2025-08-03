import { useEffect, useState } from "react";
import "./css/Drinks.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const Drinks = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const response = await fetch(url);
            const drinks = await response.json();

            setProducts(drinks);
            console.log(drinks);
        }
        fetchProducts();
    },[])
  return (
    <div>
        
    </div>
  )
};
export default Drinks;
