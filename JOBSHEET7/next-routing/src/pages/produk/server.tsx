import TampilanProduk from "../views/product";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type Props = {
  products: ProductType[];
};

const HalamanProdukServer = ({ products }: Props) => {
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
