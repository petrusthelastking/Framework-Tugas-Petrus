import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    // logic login disini
    push("/produk");
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <br />
      <Link href="/auth/register">belum punya akun</Link>
    </div>
  );
};

export default HalamanLogin;
