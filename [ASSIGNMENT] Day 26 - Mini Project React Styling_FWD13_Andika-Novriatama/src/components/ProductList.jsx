import ProductCard from "./ProductCard";

// Komponen induk dari ProductCard: melempar data tiap item lewat props
function ProductList({ products }) {
  return (
    <section className="list">
      <h2 className="list__title">Biji kopi pilihan</h2>
      <div className="list__grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            origin={item.origin}
            roast={item.roast}
            price={item.price}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
