import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Consultas from "./components/Consultas";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Profile = () => {
  const Card = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={cn(
          "w-full h-full bg-slate-100 shadow-lg rounded-xl p-4 flex flex-col gap-4",
          className
        )}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="w-full h-full min-h-screen py-8 px-4">
      <div className="w-full h-full shadow-lg bg-gray-100 flex flex-col py-6 px-4 rounded-xl gap-4">
        <div className="w-full flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="text-xl">
              Olá <span className="font-bold">Shadcn</span>
            </h1>
            <p className="text-gray-500">Seja bem vindo ao seu perfil</p>
          </div>
        </div>
        <div className="w-full flex gap-4">
          <Card className="w-2/5">
            <h2 className="text-xl font-semibold">Seus dados</h2>
            <div>
              <h2>Dados pessoais</h2>
              <p>Nome: Shadcn</p>
              <p>Email: test@gmail.com</p>
              <p>Telefone: 123456789</p>
              <p>Data de nascimento: 28/02/2003</p>
              <p>Idade: 30 anos</p>
            </div>
            <div>
              <h2>Endereço</h2>
              <p>Endereço: Rua x, 123</p>
              <p>CEP: 123456-789</p>
            </div>
            <div>
              <h2>Informações adicionais</h2>
              <p>Plano de saúde: Unimed</p>
              <p>Convênio: 123456789</p>
              <p>Membro desde: 2025</p>
              <p>Marcou 22 consultas</p>
            </div>
            <Button>Editar dados</Button>
          </Card>
          <Card className="w-3/5">
            <h2 className="text-xl font-semibold">Suas consultas</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Consultas />
              <Consultas />
              <Consultas />
              <Consultas />
              {/* Additional Consultas components can be added and will automatically flow downward */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
