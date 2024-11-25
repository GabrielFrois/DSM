# Como Criar uma Rede de Computadores no Cisco Packet Tracer

Este tutorial irá te guiar no processo de criação de uma rede simples de computadores utilizando o **Cisco Packet Tracer**.

## 1. Abrir o Cisco Packet Tracer
Abra o **Cisco Packet Tracer**. Ao iniciar, você verá uma tela em branco onde pode construir sua rede.

## 2. Adicionar Dispositivos

### 2.1. **Adicionar Computadores**
- Vá até a categoria **End Devices** na barra lateral à esquerda.
- Arraste o ícone do **PC** para o espaço de trabalho.
- Adicione quantos computadores forem necessários.

### 2.2. **Adicionar Switches**
- Clique na categoria **Switches** e arraste um **switch** para o espaço de trabalho.

### 2.3. **Adicionar Roteadores (Se necessário)**
- Vá até a categoria **Routers** e arraste um **roteador** para o espaço de trabalho, caso deseje adicionar roteamento entre redes.

## 3. Conectar os Dispositivos

### 3.1. **Conectar os PCs ao Switch**
- Clique no ícone de **Conexão** (ícone de cabo).
- Escolha **cabo de cobre** (cabo de rede).
- Conecte a **porta FastEthernet0** do PC à **porta FastEthernet0/1** do switch (ou outras portas, dependendo da sua escolha).
- Repita para os outros PCs, conectando-os às portas restantes do switch.

### 3.2. **Conectar o Switch ao Roteador (Se necessário)**
- Use o **cabo de cobre** para conectar uma porta do switch a uma porta do roteador (por exemplo, **FastEthernet0/2** no switch e **FastEthernet0/0** no roteador).

## 4. Configurar os Endereços IP

### 4.1. **Configurar os PCs**
1. Clique em um **PC** para abrir as configurações.
2. Vá até a aba **Desktop** e clique em **IP Configuration**.
3. Atribua um **endereço IP**, **máscara de sub-rede** e **gateway padrão**.
    - Exemplo:
      - **PC1**: 
        - IP: `192.168.1.2`
        - Máscara de Sub-rede: `255.255.255.0`
        - Gateway: `192.168.1.1`
      - **PC2**:
        - IP: `192.168.1.3`
        - Gateway: `192.168.1.1`
      - **PC3**:
        - IP: `192.168.1.4`
        - Gateway: `192.168.1.1`

### 4.2. **Configurar o Roteador (Se necessário)**
1. Clique no **roteador** e vá até a aba **CLI** (Interface de Linha de Comando).
2. No modo de configuração global, entre no modo de configuração da interface:
    ```bash
    Router> enable
    Router# configure terminal
    Router(config)# interface FastEthernet0/0
    Router(config-if)# ip address 192.168.1.1 255.255.255.0
    Router(config-if)# no shutdown
    ```
3. Isso configura o roteador com o IP `192.168.1.1` e a máscara de sub-rede `255.255.255.0`.

## 5. Verificar a Conectividade

1. No **PC1**, vá até a aba **Desktop** e clique em **Command Prompt**.
2. Digite o comando:
    ```bash
    ping 192.168.1.3
    ```
   - Se tudo estiver configurado corretamente, você deverá ver uma resposta de **sucesso** (Reply from 192.168.1.3).

## 6. Testar e Ajustar a Rede

- Teste a comunicação entre os PCs utilizando o **ping** ou outros testes.
- Caso haja roteamento, verifique as rotas necessárias e ajuste conforme necessário.

## 7. Salvar o Projeto

- Não se esqueça de salvar seu trabalho.
- Vá até **File** > **Save** e dê um nome ao arquivo.

---

## Exemplos de Comandos e Configurações:

### 7.1. **Configuração do PC (via IP Configuration)**:
- **IP**: `192.168.1.2`
- **Máscara**: `255.255.255.0`
- **Gateway**: `192.168.1.1`

### 7.2. **Configuração do Roteador (via CLI)**:
```bash
enable
configure terminal
interface FastEthernet0/0
ip address 192.168.1.1 255.255.255.0
no shutdown
