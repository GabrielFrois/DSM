# Introdução a Linguagem C

## Variáveis e Tipos de Dados
- `int`: 
    - Exemplo: 1
    - Tamanho: 2 ou 4 bytes
- `float`:
    - Exemplo: 1.99
    - Tamanho: 4 bytes
- `double`:
    - Exemplo: 1.99
    - Tamanho: 8 bytes
- `char`:
    - Exemplo: 'A'
    - Tamanho: 1 byte
    - Uma matriz de caracteres é uma string: `char myText[] = "Hello";`

## Formatação de Dados
- `%d` ou `%i`: `int`
- `%f`ou `%F`: `float`
- `%lf`: `float`
- `%c`: `char`
- `%s`: string

## Operadores Binários (Bitwise Operators)
- `$`: `AND`
- `|`: `OR`
- `^`: `XOR`
- `~`: `NOT`
- `<<`: Deslocamento à esquerda
- `>>`: Deslocamento à direita 

## if else
```c
int time = 22;

if (time < 12){
    printf("Bom dia");
} else if (time < 18){
    printf("Boa tarde");
} else {
    printf("Boa noite");
}
```

## while
```c
int i = 0;

while(i < 5){
    printf("%d\n", i);
    i++;
}
```

## do while
```c
int i = 0;

do {
    printf("%d\n", i);
    i++;
} while (i < 5>);
```

## for
```c
int i;

for (i = 0; i < 5; i++){
    printf("%d\n", i);
}
```

## Arrays
```c
int myNumbers[] = {25, 50, 75, 100};
myNumbers[0] = 33;

printf("%d", myNumbers[0]);
// 25 é substituído por 33

for (i = 0; i < 4; i++) {
  printf("%d\n", myNumbers[i]);
}

```

## Referências de Memória
Utilizamos o operador `&` para obtermos o endereço da memória alocada para a variável
```c
int myAge = 43;

printf("%d", myAge);  // Retorna o valor da variável myAge (43)
printf("%p", &myAge); // Retorna o endereço de memória da variável (0x7ffe5367e044)
```

## Ponteiros
Variáveis que armazenam o endereço de memória de outra variável
```c
int myAge = 43; 
int* ptr = &myAge;  // armazena o endereço da variável myAge

// Retorna 43
printf("%d\n", myAge);

// Retorna o endereço da memória, algo como: 0x7ffe5367e044
printf("%p\n", &myAge);

// retorna o endereço da memória com o ponteiro: 0x7ffe5367e044
printf("%p\n", ptr);
```

## Funções
```c
void myFunction(char name[], int age) {
  printf("Hello %s. You are %d years old.\n", name, age);
}

int main() {
  myFunction("Liam", 3);
  myFunction("Jenny", 14);
  myFunction("Anja", 30);
  return 0;
}
```

## Estrutura de Dados
```c
// Cria uma estrutura
struct myStructure {
  int myNum;
  char myLetter;
};

int main() {
  // Cria uma estrutura de variável chamada s1
  struct myStructure s1;

  s1.myNum = 13;
  s1.myLetter = 'B';

  printf("My number: %d\n", s1.myNum);
  printf("My letter: %c\n", s1.myLetter);

  return 0;
}

```