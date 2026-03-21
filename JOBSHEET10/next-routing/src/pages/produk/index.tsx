import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const Kategori = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);
  const products = isLoading
    ? []
    : Array.isArray(data?.data)
      ? data.data
      : [];

  if (error) {
    return <p style={{ padding: 16 }}>Gagal mengambil data produk.</p>;
  }

  return (
    <div>
      <TampilanProduk products={products} />
    </div>
  );
};

export default Kategori;
