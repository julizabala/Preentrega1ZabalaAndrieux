import React from "react";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import axios from "axios";

const Category = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
    .get('https://dummyjson.com/products')
    .then(res => {
      setProducts(res.data.products)
    })
    .catch((error) => console.log(error));

  }, []);


    

    return (

        <ItemListContainer products={products}/>
    )




}

export default Category;