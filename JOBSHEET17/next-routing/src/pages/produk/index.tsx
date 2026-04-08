import dynamic from "next/dynamic";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TampilanProduk = dynamic(() => import("../../views/product"), {
  loading: () => <p>Memuat produk...</p>,
  ssr: false,
});

const Kategori = () => {
  const { push } = useRouter();
  const [products, setProducts] = useState([]);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);


  return (
    <div>
      < TampilanProduk products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default Kategori;
