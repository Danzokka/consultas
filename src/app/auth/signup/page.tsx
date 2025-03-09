"use client";
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
import React from "react";
import Link from "next/link";

const formSchema = z
  .object({
    email: z
      .string({
        required_error: "Email é obrigatório",
      })
      .email("Email inválido"),
    nome: z
      .string({
        required_error: "Nome é obrigatório",
      })
      .min(3, "O nome deve ter no mínimo 3 caracteres"),
    sobrenome: z
      .string({
        required_error: "Sobrenome é obrigatório",
      })
      .min(3, "O sobrenome deve ter no mínimo 3 caracteres"),
    password: z
      .string({
        required_error: "Senha é obrigatória",
      })
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string({
      required_error: "Confirmação de senha é obrigatória",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // shows error on confirmPassword field
  });

const Cadastro = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl text-primary font-bold tracking-wider">
          Crie sua conta
        </h2>
        <p className="text-slate-600 text-center max-w-lg">
          Crie sua conta para poder se beneficiar de todos nossos serviços, como
          marcar consultas e verificar seus agendamentos
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full max-w-lg"
        >
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Nome" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sobrenome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Sobrenome" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between">Senha</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="Senha" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar Senha</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirmar Senha"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <p className="text-slate-600 text-xs">
              Ja possui uma conta?{" "}
              <Link href="/auth/login" className="hover:text-primary underline">
                Clique aqui
              </Link>{" "}
              para fazer o login
            </p>
            <Button type="submit">Cadastrar</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Cadastro;
