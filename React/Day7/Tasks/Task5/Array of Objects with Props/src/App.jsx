import ProductCard from './Component/ProductCard'
import ProductList from './Component/ProductList'
const App = () => {

const products = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 1500 },
  { id: 4, name: "Keyboard", price: 800 }
];
  return (
    <>
  <ProductList Catherine={products}/>
  <ProductCard catherine1={products} />

    </>
  )
}

export default App
