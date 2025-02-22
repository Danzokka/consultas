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
  },
];
