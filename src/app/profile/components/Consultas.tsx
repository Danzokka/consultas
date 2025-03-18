/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import { CalendarIcon, Clock } from "lucide-react";
import DialogConsulta from "./DialogConsulta";

interface ConsultasProps {
  className?: string;
  consulta: {};
}

const Consultas = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col py-6 px-4 gap-4 bg-slate-50 rounded-xl shadow-sm",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold tracking-wide">Medico</h1>
        <h2 className="text-gray-500">Especialidade</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center h-full gap-2">
          <CalendarIcon className="text-primary w-5 h-5" />
          <p className="text-gray-600">
            Data: <span className="text-gray-900">07/10/2025</span>
          </p>
        </div>
        <div className="flex items-center h-full gap-2">
          <Clock className="text-primary w-5 h-5" />
          <p className="text-gray-600">
            Horário: <span className="text-gray-900">15:00</span>
          </p>
        </div>
      </div>
      <DialogConsulta />
    </div>
  );
};

export default Consultas;
