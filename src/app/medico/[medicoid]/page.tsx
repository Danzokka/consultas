/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getMedico } from "./actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MedicHero from "./components/MedicHero";
import MedicStats from "./components/MedicStats";
import MedicTestimonials from "./components/MedicTestimonials";

const page = async ({ params }: any) => {
  const medico = await getMedico(parseInt(params.medicoid));

  if (!medico) {
    return <div>Medico não encontrado</div>;
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-12">
      <MedicHero medic={medico} />
      <MedicStats medic={medico} />
      <MedicTestimonials />
    </div>
  );
};

export default page;
