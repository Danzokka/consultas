/* eslint-disable @next/next/no-img-element */
import { medicoData } from "@/classes/medico";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ScheduleForm from "./Form";

interface MedicHeroProps {
  medic: medicoData;
  className?: string;
}

const MedicHero = ({ medic }: MedicHeroProps) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div className="max-w-lg md:max-w-none flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
                {medic.nome}
              </h2>
              <h3 className="text-xl font-semibold text-gray-700">
                {medic.especialidade}
              </h3>
            </div>

            <p className="mt-4 text-gray-700">{medic.sobre}</p>
            <div className="w-full flex items-center justify-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="font-semibold p-6 text-lg">
                    Marcar consulta
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <ScheduleForm medic={medic} />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div>
            <img src={medic.imagem} className="rounded" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicHero;
