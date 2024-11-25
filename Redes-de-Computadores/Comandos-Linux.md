# Comandos Básicos do Linux

## 1. `ls` – Lista o conteúdo de um diretório
- **Explicação**: Esse comando exibe os arquivos e pastas no diretório atual.
- **Exemplo**:
    ```bash
    ls
    ```
- **Dica**: Use `ls -l` para detalhes adicionais (como permissões, proprietário, etc.) e `ls -a` para mostrar arquivos ocultos.

## 2. `cd` – Muda o diretório de trabalho
- **Explicação**: Usado para navegar entre diretórios.
- **Exemplo**:
    ```bash
    cd /home/usuario/Documentos
    ```
- **Dica**: Use `cd ..` para voltar ao diretório anterior ou `cd ~` para ir para o diretório home do usuário.

## 3. `pwd` – Mostra o diretório atual
- **Explicação**: Exibe o caminho completo do diretório atual.
- **Exemplo**:
    ```bash
    pwd
    ```

## 4. `mkdir` – Cria um novo diretório
- **Explicação**: Usado para criar um novo diretório (pasta).
- **Exemplo**:
    ```bash
    mkdir nova_pasta
    ```

## 5. `rm` – Remove arquivos ou diretórios
- **Explicação**: Este comando apaga arquivos. Usar com cuidado, pois a remoção é permanente.
- **Exemplo**:
    ```bash
    rm arquivo.txt
    ```
    Para remover diretórios, use a opção `-r` (recursivo):
    ```bash
    rm -r pasta
    ```
- **Dica**: Use `rm -i` para uma confirmação antes de apagar o arquivo.

## 6. `cp` – Copia arquivos ou diretórios
- **Explicação**: Usado para copiar arquivos ou diretórios de um local para outro.
- **Exemplo**:
    ```bash
    cp arquivo.txt /home/usuario/Documentos
    ```

## 7. `mv` – Move ou renomeia arquivos e diretórios
- **Explicação**: Este comando pode ser usado para mover ou renomear arquivos e diretórios.
- **Exemplo**:
    - Para mover um arquivo:
        ```bash
        mv arquivo.txt /home/usuario/Documentos
        ```
    - Para renomear um arquivo:
        ```bash
        mv arquivo.txt novo_nome.txt
        ```

## 8. `cat` – Exibe o conteúdo de um arquivo
- **Explicação**: Exibe o conteúdo de arquivos no terminal.
- **Exemplo**:
    ```bash
    cat arquivo.txt
    ```

## 9. `echo` – Exibe uma mensagem ou variável
- **Explicação**: Usado para imprimir uma mensagem no terminal ou mostrar o valor de uma variável.
- **Exemplo**:
    ```bash
    echo "Olá, Mundo!"
    ```

## 10. `man` – Exibe o manual de um comando
- **Explicação**: Mostra a documentação completa de um comando.
- **Exemplo**:
    ```bash
    man ls
    ```

## 11. `sudo` – Executa um comando com privilégios de superusuário
- **Explicação**: Usado para executar comandos com permissões de administrador (root).
- **Exemplo**:
    ```bash
    sudo apt update
    ```

## 12. `top` – Mostra processos em execução
- **Explicação**: Exibe uma lista dos processos em execução no sistema, com informações sobre uso de CPU e memória.
- **Exemplo**:
    ```bash
    top
    ```
- **Dica**: Use `q` para sair do `top`.

## 13. `ps` – Exibe os processos em execução
- **Explicação**: Mostra uma lista de processos em execução no sistema.
- **Exemplo**:
    ```bash
    ps aux
    ```
- **Dica**: Use `ps aux | grep <nome_do_processo>` para encontrar um processo específico.

## 14. `chmod` – Altera permissões de arquivos e diretórios
- **Explicação**: Usado para alterar as permissões de leitura, escrita e execução de arquivos e diretórios.
- **Exemplo**:
    ```bash
    chmod 755 arquivo.sh
    ```
- **Dica**: O número `755` é uma forma abreviada de definir permissões. O primeiro dígito refere-se ao dono, o segundo aos outros usuários do mesmo grupo e o terceiro a todos os outros usuários.

## 15. `df` – Exibe o uso do espaço em disco
- **Explicação**: Mostra a quantidade de espaço livre e usado no sistema de arquivos.
- **Exemplo**:
    ```bash
    df -h
    ```
- **Dica**: A opção `-h` exibe o resultado em um formato legível (GB, MB, etc.).

## **Dicas para a Prova Prática**:

- **Navegação e Manipulação de Arquivos**: Esteja confortável com os comandos `cd`, `ls`, `cp`, `mv`, `rm`, e `mkdir`. Ser capaz de navegar e organizar arquivos rapidamente será essencial.
  
- **Permissões de Arquivos**: Lembre-se de que o comando `chmod` é fundamental para a alteração de permissões. Os números de permissão (como 755, 644) são comuns, então pratique entendê-los.

- **Processos e Monitoramento**: Conhecer os comandos `ps` e `top` pode ser importante para verificar se há processos em execução que podem afetar o desempenho ou precisam ser terminados.

- **Sudo**: Em uma prova prática, você pode ser solicitado a realizar tarefas administrativas, como atualizar o sistema ou instalar pacotes, portanto, o `sudo` será frequentemente necessário.

- **Exercícios de Diagnóstico**: Os comandos `df`, `top`, e `ps` podem ser usados para diagnosticar o uso do sistema (como o uso de memória, processos em execução, e espaço em disco).
