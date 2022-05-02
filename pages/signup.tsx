import { Button, InputText, PageHead } from "@/components";
import type { NextPage } from "next";
import Link from "next/link";

const Signup: NextPage = () => {
  return (
    <>
      <PageHead
        title="Cadastro"
        description="Cadastre-se no Nibble Restaurantes e faça comece a fazer pedidos com apenas um clique!"
        keywords="cadastro, restaurantes, nibble, nibble restaurantes"
      />
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="bg-indigo-200 md:basis-full lg:basis-4/12 lg:rounded-r-3xl">
          [imagem]
        </div>
        <div className="lg:basis-8/12 flex">
          <div className="max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">Criar uma conta</h1>
            <p className="mb-6">
              Por favor, crie uma conta para continuar usando nosso serviço.
            </p>
            <InputText
              label="Nome Completo"
              type="text"
              placeholder="Informe seu nome"
            />
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
            <Button className="bg-indigo-600 text-white">Criar a conta</Button>
            <p className="mt-3 mb-14 text-slate-700 text-center">
              Você já tem uma conta?{" "}
              <Link href="/login">
                <a className=" text-orange-600 font-bold hover:text-orange-500 transition-colors">
                  Acesse aqui.
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
