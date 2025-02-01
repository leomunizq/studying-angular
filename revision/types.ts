let nome: string = 'Leonardo';
let idade: number = 30;
let ativo: boolean = true;

let nulo: null = null;
let indefinido: undefined = undefined;

let numeroGrande: bigint = 9007199254740991n;

let simbolo: symbol = Symbol('id');

let pessoa: [string, number] = ['Leonardo', 30];

let usuario: { nome: string; idade: number; ativo: boolean } = {
  nome: 'Leonardo',
  idade: 30,
  ativo: true,
};

enum Cores {
  Vermelho = 'red',
  Azul = 'blue',
  Verde = 'green',
}

let minhaCor: Cores = Cores.Vermelho;
console.log(minhaCor); // "red"

let idadeOuNome: number | string;
idadeOuNome = 30; // OK
idadeOuNome = 'Leonardo'; // OK

type Endereco = {
  rua: string;
  numero: number;
};

type Cliente = {
  nome: string;
  idade: number;
};

type ClienteComEndereco = Cliente & Endereco;

let cliente1: ClienteComEndereco = {
  nome: 'Ana',
  idade: 25,
  rua: 'Av. Brasil',
  numero: 100,
};

console.log({
  nome,
  idade,
  ativo,
  nulo,
  indefinido,
  numeroGrande,
  simbolo,
  pessoa,
  usuario,
  minhaCor,
  idadeOuNome,
  cliente1,
});
