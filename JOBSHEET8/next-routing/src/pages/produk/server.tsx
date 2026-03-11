import TampilanProduk from "../views/product";
import { produkType } from "../type/Product.type";

const HalamanProdukServer = (props:{products: produkType[]}) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}

export default HalamanProdukServer;
