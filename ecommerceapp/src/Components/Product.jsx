import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/singleprodcut.css';
const Product = () => {
  const { id } = useParams();
  const [singleData, setsingleData] = useState();
  console.log(id);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setsingleData(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(singleData);
  return (
    <div className="singleProductDetail">
      <div className="ProductImage">
        <img src={singleData?.image} alt="" />
      </div>
      <div className="ProductDetail">
        <span>
          <h1>{singleData?.title}</h1>
          <h2>Category : {singleData?.category}</h2>
          <h2>Price: ${singleData?.price}</h2>
          <h3>Rating: {singleData?.rating?.rate}</h3>
          <p>
            Description <br /> <br /> {singleData?.description}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Product;
