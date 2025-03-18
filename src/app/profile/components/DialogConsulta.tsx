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
import { Button } from "@/components/ui/button";

const DialogConsulta = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-semibold">Ver detalhes</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes sobre sua consulta</DialogTitle>
          <DialogDescription>
            Consulta com o doutor x
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>Data: 07/10/2025</p>
          <p>Horário: 15:00</p>
          <p>Local: Hospital x</p>
          <p>Endereço: Rua x</p>
        </div>
        <DialogFooter>
          <Button className="bg-red-700">Cancelar consulta</Button>
          <Button>Reagendar consulta</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogConsulta;
