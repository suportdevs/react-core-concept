import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustator', price: '$88.99'},
    {name: 'AfterEffect', price: '$79.99'}
  ]
  const dp = products.map(product => product);
  console.log(dp);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {products.map(product => <li>{product.name}</li>)}
          <li>{dp[0].name}</li>
          <li>{dp[1].name}</li>
          <li>{dp[2].name}</li>
        </ul>
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        {products.map(product => <Product product={product}></Product>)}
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
  return (
    <div>
      <h1>Dynamic User: {users.length}</h1>
      <ul>
      {users.map(user => <li>{user.name} {user.phone}</li>)}
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setState] = useState(20);
  const hanldeCounter = () => setState(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setState(count + 1)}>Increase</button>
      <button onClick={() => setState(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const {name, price} = props.product;
  return (
    <div style={{border:'2px solid gold', padding: '10px'}}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
