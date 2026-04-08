import Link from "next/link";
import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const fullname = formData.get("Fullname") as string;
    const password = formData.get("Password") as string;

    if (!email) {
      setError("Email wajib diisi");
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      setIsLoading(false);
      return;
    }

    const result = await signIn("credentials", {
      email,
      fullname,
      password,
      redirect: false,
    });

    if (result?.ok) {
      form.reset();
      setIsLoading(false);
      push("/profile");
    } else {
      setIsLoading(false);
      setError("Email atau password salah");
    }
  };

  return (
    <div className={style.login}>
      {error && <p className={style.login__error}>{error}</p>}
      <h1 className={style.login__title}>Halaman Login</h1>

      <div className={style.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={style.login__form__item}>
            <label
              htmlFor="email"
              className={style.login__form__item__label}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={style.login__form__item__input}
            />
          </div>

          <div className={style.login__form__item}>
            <label
              htmlFor="Fullname"
              className={style.login__form__item__label}
            >
              Fullname
            </label>
            <input
              type="text"
              id="Fullname"
              name="Fullname"
              placeholder="Fullname"
              className={style.login__form__item__input}
            />
          </div>

          <div className={style.login__form__item}>
            <label
              htmlFor="Password"
              className={style.login__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="Password"
              placeholder="Password"
              className={style.login__form__item__input}
            />
          </div>

          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          )}

          <button
            type="submit"
            className={style.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>

      <br />
      <p className={style.login__form__item__text}>
        tidak punya {"\'"} akun? <Link href="/auth/register">Ke Halaman Register</Link>
      </p>
    </div>
  );
};

export default TampilanLogin;
