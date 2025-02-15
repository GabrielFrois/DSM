Table cliente {
  cpf integer [primary key]
  nome varchar
  habilitacao interger
}

Table carro {
  placa varchar [primary key]
  modelo varchar
  diaria interger
}

Table aluguel {
  id_aluguel integer [primary key]
  cliente_cpf integer
  carro_placa varchar
}

Ref: cliente.cpf > aluguel.id_aluguel 

Ref: carro.placa > aluguel.id_aluguel
