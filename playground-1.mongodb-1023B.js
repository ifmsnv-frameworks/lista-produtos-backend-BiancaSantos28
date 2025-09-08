use("banco1023b")

db.estudantes.insertMany([
    {
    nome: "Bianca",
    idade: 17,
    cpf: "048.797.381-07",
    rg: "12.345.678-9",
    data_nascimento: "2008-06-28",
    endereco: {
        logradouro: "Rua das Flores",
        numero: 0,
        bairro: "Jardim Primavera"
    },
    email:[ 
        "bs3885968@gmail.com",
        "bianca.paula@estudante.ifms.edu.br"
    ]
},
    {
    nome: "Lalala",
    idade: 18,
    cpf: "123.456.789-00",
    rg: "98.765.432-1",
    data_nascimento: "2005-05-15",
    endereco: {
        logradouro: "Avenida Central",
        numero: 100,
        bairro: "Centro"
    },
    email:[ 
        "lalalalla.gmail.com",
        "lelelelle.gmail.com"
    ]
}
])