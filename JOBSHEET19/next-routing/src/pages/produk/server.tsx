import TampilanProduk from "../../views/product";
import { produkType } from "../../types/Product.type";

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk`);
  const data = await res.json();
  // console.log("Data produk yang diambil dari API:", data);
  return {
    props: {
      products: data.data, // Pastikan untuk memberikan nilai default jika data tidak tersedia
    },
  };
}

export default HalamanProdukServer;
