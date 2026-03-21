import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetcher";
import useSWR from "swr";
import DetailsProduk from "../../views/DetailProduct";
import { produkType } from "@/types/Product.type";

const HalamanProduk = () => {
  const { query } = useRouter();
  const { data, isLoading } = useSWR(
    query.id ? `/api/produk/${query.id}` : null,
    fetcher,
  );

  const product = (data?.data ?? null) as produkType | null;

  if (isLoading || !product) {
    return <p style={{ padding: 16 }}>Memuat detail produk...</p>;
  }

  return (
    <div>
      <DetailsProduk product={product} />
    </div>
  );
};

export default HalamanProduk;
