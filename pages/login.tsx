import { Button, InputText, PageHead } from "@/components";
import type { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <>
      <PageHead
        title="Login"
        description="Faça seu login no Nibble Restaurantes."
        keywords="login, restaurantes, nibble, nibble restaurantes"
      />
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="bg-indigo-200 md:basis-full lg:basis-4/12 lg:rounded-r-3xl">
          [imagem]
        </div>
        <div className="lg:basis-8/12 flex">
          <div className="max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">Bem vindo!</h1>
            <p className="text-slate-700 mb-6">
              Autentique-se para continuar usando nosso serviço.
            </p>
            <InputText
              label="Endereço de E-mail"
              type="email"
              placeholder="Informe seu e-mail "
            />
            <InputText
              label="Senha"
              type="password"
              placeholder="Informe sua senha"
            />
            <Button className="bg-indigo-200 text-indigo-800">Entrar</Button>
            <div className="text-center p-6">
              <Link href="/forgot">
                <a className="text-slate-400 hover:text-slate-900 transition-colors">
                  Recuperar senha
                </a>
              </Link>
            </div>
            <Link href="/forgot">
              <a className="block bg-indigo-600 w-full p-4 text-white text-lg rounded-xl text-center font-bold hover:opacity-90 transition-opacity">
                Criar uma conta
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
