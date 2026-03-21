import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetcher";
import useSWR from "swr";
import DetailsProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProduk = () => {
  // const { query } = useRouter();
  // const { data, isLoading } = useSWR(
  //   query.id ? `/api/produk/${query.id}` : null,
  //   fetcher,
  // );

  // const product = (data?.data ?? null) as produkType | null;

  // if (isLoading || !product) {
  //   return <p style={{ padding: 16 }}>Memuat detail produk...</p>;
  // }

  return (
    <div>
      <DetailsProduk product={product} />
    </div>
  );
};

export default HalamanProduk;

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
  const respone = await res.json();
  
  return {
    props: {
      product: respone.data,
    },
  };
}