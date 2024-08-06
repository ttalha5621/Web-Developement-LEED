import axios from "axios";
import "./App.css";
import Category from "./Category";
import { useEffect, useState } from "react";

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalProduct, setFinalProduct] = useState([]);
  let [catName, setCatName]= useState('')

  let getCategories = () => {
    axios
      .get("https://dummyjson.com/products/categories/")
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);
        setFinalCategory(finalRes);
      });
  };
  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setFinalProduct(finalRes.products);
      });
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  useEffect(()=>{
    if(catName!==""){
      axios
      .get(`https://dummyjson.com/products/category/${catName}`)
      .then((catres) => catres.data)
      .then((finalRes) => {
        // console.log(finalRes);
        setFinalProduct(finalRes.products);
      });
    }
  },[catName])

  let Pitems = finalProduct.map((products, index) => {
    return <ProductItems pdata={products} key={index} />;
  });

  return (
    <>
      <div className="py-[40]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold my-[30px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category finalCategory={finalCategory} setCatName={setCatName}/>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4 pb-1">
                {
                  finalProduct.length >= 1 ?
                    Pitems
                    :
                    "No Product Found"
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItems(pdata) {
  // console.log(pdata.pdata);
  let data = pdata.pdata;
  return (
    <div className="shadow-lg text-center pb-4">
      <img src={data.thumbnail} alt={data.title} className='w-[100%] h-[220px]' />
      <h3 className='font-bold'>{data.title}</h3>
      <b>${data.price}</b>
      <p className="text-justify px-3">{data.description}</p>
    </div>
  );
}
