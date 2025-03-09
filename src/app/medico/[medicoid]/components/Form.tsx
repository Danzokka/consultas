"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { medicoData } from "@/classes/medico";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";


interface ScheduleFormProps {
  medic: medicoData;
}

const formSchema = z.object({
  date: z
    .string({
      required_error: "O dia é obrigatório",
    }),
  schedule: z
    .string({
      required_error: "O horário é obrigatório",
    })
});

const ScheduleForm = ({ medic }: ScheduleFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full items-center justify-center py-8 px-4 rounded-lg"
        >
          <h2 className="w-full text-2xl font-bold text-left">
            Marque a sua consulta com <br />{" "}
            <span className="text-primary">{medic.nome}</span>
          </h2>
          <h3 className="text-left w-full text-gray-700">
            Selecione o dia e horário da sua consulta
          </h3>
          <div className="w-full flex gap-4 justify-between">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Dia</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o dia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Dias</SelectLabel>
                          {Array.from({ length: 30 }, (_, i) => {
                            const day = i + 1;
                            return (
                              <SelectItem key={day} value={`${day}`}>
                                {`${day}`}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="schedule"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Horário</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Horários</SelectLabel>
                          {Array.from({ length: 13 }, (_, i) => {
                            const hour = i + 8;
                            return (
                              <SelectItem key={hour} value={`${hour}:00`}>
                                {`${hour}:00 - ${hour + 1}:00`}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Agendar consulta</Button>
        </form>
      </Form>
    </div>
  );
};

export default ScheduleForm;
