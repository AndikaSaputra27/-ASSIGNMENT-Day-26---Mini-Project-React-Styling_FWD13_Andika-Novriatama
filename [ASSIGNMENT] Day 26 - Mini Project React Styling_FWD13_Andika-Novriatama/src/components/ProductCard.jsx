// Komponen anak: menerima data produk lewat props
function ProductCard({ name, origin, roast, price, color }) {
  const formattedPrice = "Rp " + price.toLocaleString("id-ID");

  return (
    <article className="card">
      {/* Inline style: warna blok mengikuti props.color */}
      <div className="card__swatch" style={{ backgroundColor: color }}>
        <span className="card__initial">{name.charAt(0)}</span>
      </div>
      <div className="card__body">
        <h3 className="card__name">{name}</h3>
        <p className="card__meta">
          {origin} · Roast {roast}
        </p>
        <p className="card__price">{formattedPrice}</p>
        <button className="card__button">Tambah ke keranjang</button>
      </div>
    </article>
  );
}

export default ProductCard;
