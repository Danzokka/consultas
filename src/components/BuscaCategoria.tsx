"use client"
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import CardMedico from "./CardMedico";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BuscaCategoria = () => {

  const [pesquisa, setPesquisa] = React.useState("");

  const medicos = [
    {
      id: 1,
      nome: "Dr. Rafael Dantas",
      especialidade: "Oftamologista",
      imagem: "/doctors.jpg",
    },
    {
      id: 2,
      nome: "Dra. Sthefane Silva",
      especialidade: "Cardiologista",
      imagem: "/doctors.jpg",
    },
    {
      id: 3,
      nome: "Dr. João Victor",
      especialidade: "Nutricionista",
      imagem: "/doctors.jpg",
    },
    {
      id: 4,
      nome: "Dra. Marina Silva",
      especialidade: "Dermatologista",
      imagem: "/doctors.jpg",
    },
    {
      id: 5,
      nome: "Dr. Arthur da Silva",
      especialidade: "Endocrinologista",
      imagem: "/doctors.jpg",
    },
    {
      id: 6,
      nome: "Dra. Natalia Bastos",
      especialidade: "Cardiologista",
      imagem: "/doctors.jpg",
    },
    {
      id: 7,
      nome: "Dr. César Avante",
      especialidade: "Otorrinolaringologista",
      imagem: "/doctors.jpg",
    },
    {
      id: 8,
      nome: "Dr. Romulo Mendonça",
      especialidade: "Otorrinolaringologista",
      imagem: "/doctors.jpg",
    },
    {
      id: 9,
      nome: "Dr. Gabriel Diniz",
      especialidade: "Oftamologista",
      imagem: "/doctors.jpg",
    },
    {
      id: 10,
      nome: "Dr. Gabriel Formaio",
      especialidade: "Psicologista",
      imagem: "/doctors.jpg",
    },
  ];

  const handlePesquisa = (e: any) => {
    setPesquisa(e.target.value);
  }

  const medicosFiltrados = medicos.filter((medico) => {
    return medico.especialidade.toLowerCase().includes(pesquisa.toLowerCase());
  });


  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <h2 className="font-bold text-4xl tracking-wide">
        Procure por <span className="text-primary">Médicos</span>
      </h2>
      <h3 className="text-xl tracking-wider">
        Procure por um médico e marque sua consulta
      </h3>
      <div className="flex w-full items-center space-x-2">
        <Input type="text" placeholder="Pesquise por médicos" onChange={handlePesquisa}/>
        <Button type="submit">
          {" "}
          <Search className="" /> Buscar
        </Button>
      </div>

      <Carousel>
        <CarouselContent className="-ml-8">
          {medicosFiltrados.map((medico) => (
            <CarouselItem key={medico.id} className="basis-1/8 pl-8">
              <CardMedico props={medico} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BuscaCategoria;
