import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Consultas from "./components/Consultas";

const Profile = () => {
  const Card = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-full bg-slate-100 shadow-lg rounded-xl p-4">
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
          <Card>
            <h2 className="text-xl">Seus dados</h2>
            <p>Nome: Shadcn</p>
            <p>Email:</p>
          </Card>
          <Card>
            <h2 className="text-xl">Suas consultas</h2>
            <Consultas />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
