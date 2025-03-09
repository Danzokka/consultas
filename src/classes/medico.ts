export interface medicoData {
  id: number;
  nome: string;
  especialidade: string;
  imagem: string;
  crm: string;
  telefone: string;
  email: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  clinica: string;
  horario: string;
  sobre: string;
}

export class Medico {
  id: number;
  nome: string;
  especialidade: string;
  imagem: string;
  crm: string;
  telefone: string;
  email: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  clinica: string;
  horario: string;
  sobre: string

  constructor(medicoData: medicoData) {
    this.id = medicoData.id;
    this.nome = medicoData.nome;
    this.especialidade = medicoData.especialidade;
    this.imagem = medicoData.imagem;
    this.crm = medicoData.crm;
    this.telefone = medicoData.telefone;
    this.email = medicoData.email;
    this.endereco = medicoData.endereco;
    this.cidade = medicoData.cidade;
    this.estado = medicoData.estado;
    this.cep = medicoData.cep;
    this.clinica = medicoData.clinica;
    this.horario = medicoData.horario;
    this.sobre = medicoData.sobre;
  }
}

export const medicos: medicoData[] = [
  {
    id: 1,
    nome: "Dr. Rafael Dantas",
    especialidade: "Oftamologista",
    imagem: "/doctors.jpg",
    crm: "123456",
    telefone: "123456",
    email: "teste@gmail.com",
    endereco: "Rua teste",
    cidade: "São Paulo",
    estado: "SP",
    cep: "123456",
    clinica: "Clinica teste",
    horario: "08:00 - 18:00",
    sobre:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    nome: "Dra. Sthefane Silva",
    especialidade: "Cardiologista",
    imagem: "/doctors.jpg",
    crm: "123456",
    telefone: "123456",
    email: "amor@gmail.com",
    endereco: "Rua teste",
    cidade: "São Paulo",
    estado: "SP",
    cep: "123456",
    clinica: "Clinica teste",
    horario: "08:00 - 18:00",
    sobre:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
