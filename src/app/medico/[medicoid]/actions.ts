"use server";
import { medicos } from "@/classes/medico";
import { medicoData } from "@/classes/medico";

export const getMedico = async (medicoid: number) => {
  return medicos.find((medico: medicoData) => medico.id === medicoid);
};
