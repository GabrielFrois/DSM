#include <stdio.h>
#include <math.h>

int main(){
    int n, i;
    double numeros[100];
    double soma = 0.0, media, soma_diferencas = 0.0, desvio_padrao;

    printf("Digite a quantidade de números: ");
    scanf("%d", &n);

    if (n > 100 || n < 2){
        printf("Insira um valor entre 2 e 100.\n");
        return 1;
    }

    printf("Digite os %d números:\n", n);
    for (i = 0; i < n; i++){
        printf("Número %d: ", i + 1);
        scanf("%lf", &numeros[i]);
        soma += numeros[i];
    }

    media = soma / n;
    printf("Média: %.2lf\n", media);

    for (i = 0; i < n; i++){
        soma_diferencas += pow(numeros[i] - media, 2);
    }

    desvio_padrao = sqrt(soma_diferencas / (n - 1));

    printf("Desvio Padrão: %.2lf\n", desvio_padrao);

    return 0;
}