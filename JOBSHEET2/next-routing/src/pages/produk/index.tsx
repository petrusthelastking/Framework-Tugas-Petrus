import { useRouter } from "next/router";
import { useEffect } from "react";

const ProdukPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin") === "true";
    if (!loginStatus) {
      push("/auth/login");
    }
  }, [push]);

  return <div>Produk User Page</div>;
};

export default ProdukPage;
