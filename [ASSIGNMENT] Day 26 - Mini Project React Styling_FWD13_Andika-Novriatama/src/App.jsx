import Header from "./components/Header";
import ProductList from "./components/ProductList";
import products from "./data/products";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header
        title="Kopi Nusantara"
        subtitle="Biji kopi single origin langsung dari petani lokal."
      />
      <main className="content">
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
