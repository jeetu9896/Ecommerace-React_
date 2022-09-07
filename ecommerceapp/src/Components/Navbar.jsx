import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <div>
<Link to='/'  >Home </Link>
<Link to='/about' >About </Link>
<Link to='/contact' >Contact </Link>
<Link to='/product' >Product </Link>
<Link to='/cart' >Cart</Link>
<Link to='payment' >Payment </Link>
<Link to='/login' >Login </Link>
<Link to='/signup' >Sginup</Link>
<Link to='/order' >Orders</Link>
{/* <Link to='' >Home </Link> */}
{/* <Link to='' >Home </Link> */}
  </div>;
};

export default Navbar;
