import React from 'react';
import '../CSS/product.css';

import { Link } from 'react-router-dom';

class Products extends React.Component {
  state = {
    product: [],
  };
  componentDidMount() {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((res) => this.setState({ product: res }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="fetchprodcut">
        {this.state.product.map((item, index) => (
          <div>
            <Link to={`/product/${item.id}`} key={item.id}>
              <div key={index}>
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <h2> Price ${item.price}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
