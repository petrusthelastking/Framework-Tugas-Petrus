import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProdukPage = () => {
  const [isLogin] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  return <div>Produk User Page</div>;
};

export default ProdukPage;
