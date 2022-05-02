import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nibble Restaurantes</title>
        <meta name="description" content="Nibble Restaurantes" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div>
        <h1>Home</h1>
        <Link href="/signup">
          <a>Cadastro</a>
        </Link>

        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
