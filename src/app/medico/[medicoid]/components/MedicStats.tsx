import { medicoData } from "@/classes/medico";
import React from "react";
import { Star } from "lucide-react";
interface MedicStatsProps {
  medic: medicoData;
  className?: string;
}

const MedicStats = ({ medic, className }: MedicStatsProps) => {
  const Card = ({ title, value }: { title: string; value: string }) => {
    return (
      <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center gap-2">
        <dt className="order-last text-lg font-medium text-gray-500">
          {title}
        </dt>
        <dd className="text-2xl font-bold text-blue-600 md:text-4xl">
          {title === "Avaliação" ? (
            <div className="flex items-center justify-center gap-4">
              {value}
              <Star size={36} fill="#fde047" className="text-yellow-300" />
            </div>
          ) : (
            value
          )}
        </dd>
      </div>
    );
  };

  const stats = [
    { title: "Avaliação", value: "4.8" },
    { title: "Consultas Marcadas", value: "24" },
    { title: "Consultas Realizadas", value: "86" },
    { title: "Horários Livres", value: "12" },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex flex-col gap-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl tracking-wide">
          Sobre o médico
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          Veja como o médico está se saindo dentro da plataforma
        </p>
      </div>

      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} title={stat.title} value={stat.value} />
        ))}
      </dl>
    </div>
  );
};

export default MedicStats;
