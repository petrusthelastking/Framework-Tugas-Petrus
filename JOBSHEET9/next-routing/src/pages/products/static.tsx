import TampilanProduk from "../../views/product";
import { produkType } from "../../types/Product.type";

const HalamanProdukStatic = (props: { products: produkType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response: { data: produkType[] } = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
