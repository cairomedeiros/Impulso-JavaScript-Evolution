class User {
    nome;
    idade;
    profissao;

    constructor(nome: string, idade: number, profissao: string){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
} 

let pessoa1 = new User("maria", 29, "atriz");
let pessoa2 = new User("roberto", 19, "padeiro");
let pessoa3 = new User("laura", 32, "Atriz"); 
let pessoa4 = new User("carlos", 19, "padeiro");
