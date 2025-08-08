# Comandos Importantes

## Criando um Projeto TypeScript com Prisma

### Comandos:  
- Para criar package.json: `npm init -y`
- `npm install express prisma @prisma/client dotenv`
- `npm install -D typescript ts-node-dev @types/node @types/express`
- Para criar o tsconfig.json: `npx tsc -init`

## Política de Execução de Scripts Restritiva
Caso o código não seja executado pois o sistema restringe a execução de códigos, use:  
`Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`  
- O `RemoteSigned` permite a execução de scripts locais, mas exige que scripts baixados da internet sejam assinados por um editor confiável
- O `-Scope CurrentUser` altera a política apenas para o seu usuário, sem afetar outros usuários no computador
